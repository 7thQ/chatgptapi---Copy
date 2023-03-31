///

// the imports are the dependency of the script
import { config } from "dotenv";
config();

import { Configuration, OpenAIApi } from "openai";

import readline from "readline";

// they have to go in order remember because the script is read from top to bottom

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.apk_key })
);

const userinterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// what the const do is change the value of the variable or (the name in simple)

userinterface.prompt();
userinterface.on("line", async (input) => {
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  console.log(res.data.choices[0].message.content);
  userinterface.prompt();
});
