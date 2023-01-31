
const OpenAI = require ('openai');
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');

const app = express();
const port = 3002;

const configuration = new Configuration({
    organization: "org-Xf38KAeiHzgwZOxV8DXQ8XNr",
    apiKey: "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",
});
const Openai = new OpenAIApi(configuration);


app.use(bodyParser.json());
app.use(cors());

app.post('/', async ( req, res) => {
    const { message } = req.body;
    const response = await Openai.createCompletion({
         model: "text-davinci-003",
         prompt:' pretend you are pickup artist. your task is suggesting the best replay to girls text messages Playfully be unorthodox .only write your suggestion.text: '+ message ,
        
         max_tokens: 100,
         temperature: 0,
      });
    console.log(response.data)
    if(response.data.choices[0].text){
        res.json({message: response.data.choices[0].text})
  }
});
    
app.listen(port, () => {
  console.log('Example app listening at http://locahost:${port}');
});

