const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');
const io = require("socket.io")({
	cors: {
	  origin: '*',
	  allowedHeaders: ["my-custom-header"],
	  credentials: true,
	},
	serveClient:false
  });
const formatMessage = require("./utils/messages");
const createAdapter = require("@socket.io/redis-adapter").createAdapter;
const redis = require("redis");
var cors = require('cors')
require("dotenv").config();
const { createClient } = redis;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  disableChat,
	getToUser
} = require("./utils/users");

const app = express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/api/say', (req, res) => {
	let room=req.body.room;
	let text=req.body.text;
	let msg=formatMessage({webname:'root'},text);
	sendMsg(room,{
		id: '4Se9GqLSpvBKRg_hAAAI---yyy',
		room,
		username: '1578669864322215938-yyy',
		avatarUrl: 'http://localhost:6422/static/img/avatar/20180414165909.jpg',
		text
	})
  res.send('ok')
})
app.post('/api/disable', (req, res) => {
	let username=req.body.accountId;
	let disable=req.body.disable;
	let room=req.body.room;
	const user = disableChat(username,disable);
	// sendMsg(room,{
	// 	id: '4Se9GqLSpvBKRg_hAAAI---yyy',
	// 	room,
	// 	username,
	// 	avatarUrl: 'http://localhost:6422/static/img/avatar/20180414165909.jpg',
	// 	text:JSON.stringify(user)
	// })
	io.to(room).emit("handleDisable", user);
  res.send(user)
})
const server = http.createServer(app);
function sendMsg(room,msg){
	io.to(room).emit("message", msg);
}
//const io = socketio(server);
io.attach(server);
app.use(cors())
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

const botName = {
	  username: "ChatCord Bot",
	  avatarUrl:'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
};

// (async () => {
//   pubClient = createClient({ url: "redis://127.0.0.1:6379" });
//   await pubClient.connect();
//   subClient = pubClient.duplicate();
//   io.adapter(createAdapter(pubClient, subClient));
// })();

// Run when client connects
io.on("connection", (socket) => {

  socket.on("joinRoom", (userJson) => {
    const user = userJoin(socket.id, userJson);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "欢迎加入直播间"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `<span class="leve-room-name">${user.username}</span> 加入了直播间`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });
// Listen for chatMessage {toUser={id,username},text}=obj
	socket.on("chatAdminMsg", ({toSocket,text}) => {
		const user = getCurrentUser(socket.id);
		const toUser = getToUser(toSocket.username);
		console.log('toUser',toUser,text)
		if(!toUser) return;
		io.to(toUser.id).emit("adminMsg", formatMessage(user, text));
	});
  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
		console.log(msg)
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formatMessage(user, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `<span class="leve-room-name">${user.username}</span> 离开了直播间`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));
