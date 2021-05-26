const express = require('express')

const server = express()

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "alexander", "email": "alexcerlinii@gmail.com"}


//localhost:3000
server.get('/users/:id', (req, res) => {
const { id } = req.params

return res.json({message: `Buscando o usuário de id ${id}`})
})

//localhost:3000
server.listen(3000)