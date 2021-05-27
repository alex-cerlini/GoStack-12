const express = require('express')

const server = express()

server.use(express.json())

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "alexander", "email": "alexcerlinii@gmail.com"}

// CRUD = Create, Read, Update, Delete

const users = ['Alexander', 'Beatriz', 'Carla']

server.get('/users', (req, res) => {
  return res.json(users )
})

server.get('/users/:index', (req, res) => {
const { index } = req.params

return res.json(users[index])
})

server.post('/users', (req, res) => {
  const { name } = req.body

  users.push(name)

  return res.json(users)
})

//localhost:3000
server.listen(3000)