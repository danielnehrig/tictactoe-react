var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/move', (req, res) => {
  res.send('<h1>Hello world</h1>')
})

io.on('connection', socket => {
  console.log('a user connected')

  socket.on('placed', placedData => {
    console.log(placedData)
    io.emit('placed', placedData)
  })

  socket.on('reset', newBoard => {
    console.log('reset')
    io.emit('reset', newBoard)
  })

  socket.on('winLogic', winner => {
    console.log(winner)
    io.emit('winLogic', winner)
  })
})

const port = 3001

http.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})
