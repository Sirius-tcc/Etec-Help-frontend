const express = require('express')
const cors = require('cors')
const path = require('path');
const axios = require('axios')

const app = express()

app.use(express.json());

app.use(cors())


const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
      origin: '*',
    }
  });


io.on('connection', socket => {
    console.log(`socket connectado ${ socket.id }`)

    socket.on('sendMessage', data => { 
        axios.put('http://localhost:8080/Coisas/backend/chat/sendMessage', data).then(() =>{

            axios.get(`http://localhost:8080/Coisas/backend/chat/Messages?helper=${data.helper_code}&student=${data.student_code}`).then((res)=>{
                socket.broadcast.emit('receivedMessage', res.data.data)
            })

            if (data.user === "student"){
                axios.get(`http://localhost:8080/Coisas/backend/chat/listStudentChat/${data.student_code}`).then((res)=>{
                socket.broadcast.emit('listChat', res.data.data)
            })
            }else{

            }

        });

    })

    
})

server.listen(3333)