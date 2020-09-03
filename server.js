const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const { v4: uuidv4 } = require('uuid');
const { ExpressPeerServer } = require('peer');
const e = require('express');
const peerServer = ExpressPeerServer(server, {
    debug: true
});






app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/peerjs', peerServer);






app.get('/', (req,res)=>{
    res.redirect(`/${uuidv4()}`);
});


app.get('/:room', (req,res)=>{
    res.render('room', {roomid: req.params.room});
});






io.on('connection', socket =>{
    socket.on('join-room', (roomid, userid) =>{
        socket.join(roomid);
        socket.to(roomid).broadcast.emit('user-connected', userid);
    });
});

server.listen(3030);