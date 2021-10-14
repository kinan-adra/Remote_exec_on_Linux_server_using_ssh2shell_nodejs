const socket = io()

socket.on('response', (response)=> {
    document.querySelector('#textarea').innerHTML = response
})

document.querySelector('#init-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    
    const remotHostIP = document.querySelector('#remoteHost').value
    const userName = document.querySelector('#username').value
    const password = document.querySelector('#password').value
    const command = document.querySelector('#command').value

    socket.emit('commandSent',remotHostIP,userName,password,command)
    socket.on('response', (response)=> {
        document.querySelector('#textarea').innerHTML = response
    })
})


document.querySelector('#prompt-form').addEventListener('submit', (e)=> {
    e.preventDefault()
    const prompt = document.querySelector('#prompt-text').value
    socket.emit('promptSent', prompt)
    socket.on('response', (response)=> {
        document.querySelector('#textarea').innerHTML = response
    })
})
