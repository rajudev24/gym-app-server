const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const socket = require("socket.io");

const app = require("./app");

// ---------- Server PORT ----------
const port = process.env.PORT || 8080;

// database connection
mongoose.connect(process.env.db_atlas).then(() => {
  console.log("Database Connection successfully established".green.bold);
});


app.get("/", (req, res) => {
  res.send("adaption server Running...");
});

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`.yellow.bold);
// });

const server = app.listen(process.env.PORT, () =>
  console.log(`App is running on port ${port}`.yellow.bold)
);



// Socket.IO logic
const io = socket(server, {
  cors: {
    origin: ["https://aperio.netlify.app", "http://localhost:3000"],
    credentials: true
  }
})

let activeUsers = []
io.on("connection", (socket) => {
  socket.on("new-user-add", (newUserId) => {
    // if user is not added previously
    if (!activeUsers.some((user) => user.userId === newUserId)) {
      activeUsers.push({ userId: newUserId, socketId: socket.id });
    }
    // send all active users to new user
    io.emit("get-users", activeUsers);
  });

  socket.on("disconnect", () => {
    // remove user from active users
    activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
    // send all active users to all users
    io.emit("get-users", activeUsers);
  });

  // send message to a specific user
  socket.on("send-message", (data) => {
    const { receiverId } = data;
    const user = activeUsers.find((user) => user.userId === receiverId);
    if (user) {
      io.to(user.socketId).emit("recieve-message", data);
    }
  });
});