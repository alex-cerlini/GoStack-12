const express = require('express')

const server = express()

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "alexander", "email": "alexcerlinii@gmail.com"}

const users = ['Alexander', 'Beatriz', 'Carla']


//localhost:3000
server.get('/users/:index', (req, res) => {
const { index } = req.params

return res.json(users[index])
})

//localhost:3000
server.listen(3000)