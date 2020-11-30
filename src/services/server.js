const express = require('express')
const cors = require('cors')
//const path = require('path');

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

            axios.get(`http://localhost:8080/Coisas/backend/chat/Messages?helper=${data.helper_code}&student=${data.student_code}`)
                .then((res)=>{
                    socket.broadcast.emit('receivedMessage', res.data.data)
                })
                socket.broadcast.emit('listChat')
        });
    })


    
    socket.on('confirmRating', data => {
        if( data.user === "student" ){
            axios.get(`http://localhost:8080/Coisas/backend/help/list?helper_code=${data.id}&student_code=${data.userId}`).then( res => {
                const data = res.data
                if(data.sucess){
                    socket.broadcast.emit('confirmRating', data.data)
                }else{
                    socket.broadcast.emit([], data.data)
                }
            })
           
        }else {
            axios.get(`http://localhost:8080/Coisas/backend/help/list?helper_code=${data.userId}&student_code=${data.id}`).then( res => {
                const data = res.data
                if(data.sucess){
                    socket.broadcast.emit('confirmRating', data.data)
                }else{
                    socket.broadcast.emit([], data.data)
                }
            })
            
        }
    })

})

server.listen(3001)