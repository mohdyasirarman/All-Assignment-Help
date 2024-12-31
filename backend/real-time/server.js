const { Server } = require("socket.io");

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
    console.log('A user connected');

    socket.send("Hello, How can I help you today?")
    socket.on("message-from-client",function(data){
        socket.join(data.ip)
        io.sockets.in(data.ip).emit("message-to-client",{message:data.message})
    })

    socket.on("send-message-to-client",function(data){
        socket.emit()
    })

    socket.on("disconnect",function(){
        console.log("User disconnected")
    })
});

io.listen(3000);