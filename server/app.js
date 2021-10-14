const SSH2SHELL = require('ssh2shell')
const host = require('./host')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '../Client/public')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(express.static(publicDirectoryPath))

let ssh ;

io.on('connection', (socket)=> {
    socket.on('commandSent', (remotHostIP,userName,password,command)=> {
        host.server.host = remotHostIP
        host.server.userName = userName
        host.server.password = password
        host.server.port = 22
        host.commands.unshift(command)
        ssh= new SSH2SHELL(host)
        ssh.connect()
        ssh.on('commandProcessing' , function (command, response, sshObj, stream){
            socket.emit('response', response)
        })
       
        ssh.on('commandTimeout', function (command, response, stream, connection){
            socket.on('promptSent',(prompt)=> {
                stream.write(prompt+'\n')
                stream.end()
                if (response.indexOf('?')!=-1) {
                    socket.emit('response','all done')
                    console.log(response)
                } else {
                    socket.emit('response', 'done')
                    console.log('no response')
                }   
            })
        })
    })
})

server.listen(3000, ()=> {
    console.log('Connected to the server on port 3000')
})


