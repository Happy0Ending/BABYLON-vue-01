var exp = require('express');
var app = exp();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(exp.static('/public'));

io.on('connection', function(socket){
    console.log('a user ' + socket.id);
    socket.emit('connected', 'hello cocos! 你好，世界！');
});

http.listen(8000,function(){
    console.log('listening on 8000');
})