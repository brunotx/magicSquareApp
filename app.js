const express = require('express')
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static(__dirname + '/dist/socket-app'));

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/dist/socket-app/index.html');
    next();
})

const managers = [
    {id:1, title: 'chat'},
    {id:2, title: 'qa'},
    {id:3, title: 'poll'}
]

const videos = [
    {id:1, url: '7EdpBH81XIY'},
    {id:2, url: '0nQG8NCB-nU'},
    {id:3, url: 'mEyUzQUH-IY'}
]

io.on('connection', socket => {
    let previousId;
    const safeJoin = currentId => {
        socket.leave(previousId);
        socket.join(currentId);
        previousId = currentId;
    };


    socket.on('getManager', managerId => {
        safeJoin(managerId);
        const manager = managers.find(x => x.id === managerId);
        io.emit('manager', Object(manager));
        socket.emit('manager', manager);
    });

    socket.on('getVideo', videoId => {
        safeJoin(videoId);
        const video = videos.find(x => x.id === videoId);
        io.emit('video', Object(video));
        socket.emit('video', video);
    });

    // io.emit('manager', Object(managers));


});

http.listen(process.env.PORT || 4444, () => {
    console.log('Server Onliner....')
});