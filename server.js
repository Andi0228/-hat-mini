const express = require('express');
const app = express();
const server = require('http').Server(app); //http работает через app (тоесть express)
const io = require('socket.io')(server);

const rooms = new Map([

]);



app.get('/users', (req, res) => {
    res.json(rooms);
});

io.on('connection', socket => {
  
    console.log('user connected ', socket.id);
    
})

server.listen(8888, (err) => {
    if(err){
        throw Error(err);
    }
console.log("Server launched")
});