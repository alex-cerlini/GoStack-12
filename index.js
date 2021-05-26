const express = require('express')

const server = express()

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "alexander", "email": "alexcerlinii@gmail.com"}


//localhost:3000
server.get('/users', (req, res) => {
const name = req.query.name

return res.json({message: `Hello ${name}`})
})

//localhost:3000
server.listen(3000)