# symmetrical-bassoon
>This is a discord bot that I made, and you can make it sing, and it can make you rich.
>This bot only has 2 commands, but you can add more.
>
>*(also, this is my first **.md** file. I like the syntax!*
>
>So, this is how you can make your own:

#### Start the file with
```javascript
const Discord = require('discord.js');
const client = new Discord.Client();
```

#### To know when the program starts, you can you use
```javascript
client.on('ready', () => {
  console.log('The bot has started.');
});
```

#### To prosess messages people send, use
```javascript
client.on('message', msg => {
  <<prosess msg here>>
});
```
#### And, at the end of the file, you must have a line that connects it to you bot:
```javascript
client.login('Something here');
```
### Here is a site that explanes in more detail:
[Create Discord Bot](https://grant-bartlett.com/blog/creating-your-own-discord-bot-with-discord.js/#:~:text=Getting%20started.%201%20Sign%20in%20to%20the%20Discord,dependency.%205%20Next%2C%20create%20a%20config.json%20file.%20)
