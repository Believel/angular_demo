var ws = require("nodejs-websocket")

var PORT = 3000;
// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
	console.log("New connection")
  // 接收客户端发送的数据，是一个字符串
	conn.on("text", function (str) {
		console.log("Received "+str)
		conn.sendText(str.toUpperCase()+"!!!")
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
  // 当在浏览器中关闭当前链接的服务的页面的时候会触发此回调函数执行
  conn.on('error', function(err){
    console.log('handle err');
    console.log(err);
  })
}).listen(PORT)
console.log('websocket server listen on port' + PORT);
