const Discord = require('discord.js');
const client = new Discord.Client();

var bank = [];

client.on('ready', () => {
  console.log("starting")
});

client.on('message', msg => {
var name = msg.author.username
eval(`bank.times.${name} = 0`)
if (msg.content === '!ping') {
 msg.channel.send('pong');
}
else if (msg.content === '!sing'){
msg.channel.send('La la laaaaaaa! On top of old smokeeeeeeey... all covered in cheeeezee!!! I lost my poor meattttballll... when somebody sneased!');
}
else if (msg.content === '!get rich'){
eval(`if(bank.times.${name} === 1){
  msg.reply('No, no, no, NO. You have gotten rich before, and that was against my will. Now, I will have my revenge! Bwa ha ha ha!!!!!')
  msg.channel.send('Your bank account has been drained.')
  bank.${name} = 0
}`)
msg.channel.send(`Hello ${msg.author.username}, you got $100,000,000,000 added to your account!`);
eval(`bank.${name} = 100000000000`)
eval(`bank.times.${name} = 1`)
}
else if (msg.content === '!view account'){
  eval(`msg.channel.send("You have "+bank.${msg.author.username}+" dollars.");`)
}
});

client.login('');