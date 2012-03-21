var tako = require('../')
var filed = require('filed')

var t = tako()

t.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' })
  socket.on('my other event', function (data) {
    console.log(data)
  })
})

t.route('/', function(req, resp) {
  filed('socketio.html').pipe(resp)
})

// WORKS
t.httpServer.listen(80, function () {
  console.log("running on 80")
})

// DOESNT WORK
// var router = tako.router()
// router.default(t)
// router.httpServer.listen(80, function () {
//   console.log("running on 80")
// })
