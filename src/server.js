const express = require('express');
const client = new(require("discord.js").Client)
const server = express();

server.all('/', (req, res)=>{
   res.setHeader('Content-Type', 'text/html');
   res.write(`aaaa`);
   res.end();
   

})

function keepAlive(){
   server.listen(3000, ()=>{console.log("Stats: ONLINE | SERVER: ONLINE")});
}

module.exports = keepAlive;
