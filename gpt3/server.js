require('dotenv').config()
const express = require('express');
const axios = require('axios');
axios.defaults.headers.post['Authorization'] = process.env.OPENAI_API_TOKEN

var bodyParser = require('body-parser');
var fs = require('fs');

let promptName = 'prompt.txt'

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 4242

async function sendToGPT3(sender, epoch, text) {

    let prompt;

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let returnValue = await new Promise((resolve, reject) => {
        fs.readFile(promptName, 'utf8', async (err, data) => {
            if (err)
                throw err;
            prompt = data;

            var date = new Date(epoch * 1000);

            var year = date.getFullYear();
            var month = monthNames[date.getMonth()];
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();

            prompt += "Sender: " + sender + "\n";
            prompt += "Recieved: " + month + " " + day + ", " + year + ", " + hours + ":" + minutes + "\n";
            prompt += "Text: " + text + "\n";
            prompt += "Classification:";

            // console.log(prompt);
            try {
                let res = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
                    "prompt": prompt,
                    "max_tokens": 20,
                    "temperature": 0.4,
                    "stop": "###"
                });

                let parsed = res.data.choices[0].text.split('\n');

                // console.log(parsed)

                if (parsed.length > 2 && parsed[1].length == 0) {
                    parsed[1] = parsed[2];
                }
                parsed = parsed.slice(0, 2);

                // console.log(parsed);

                let eventType = parsed[0].trim();
                let reminder = parsed[1].trim();
                if (reminder.includes('Reminder: ')) {
                    reminder = reminder.substring(9).trim();
                }

                resolve([eventType, reminder]);
            } catch (err) {
                reject(err)
            }
        });
    })

    return returnValue;
}

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post("/reminder/", async (req, res) => {
    try {
        const result = await sendToGPT3(req.body.sender, req.body.epoch, req.body.text);
        if (Array.isArray(result)) {
            res.send({ eventType: result[0], reminder: result[1] });
        } else res.send(400, result);

    } catch (err) {
        console.log(err);
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

