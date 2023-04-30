// const express = require("express");
// const dotenv = require("dotenv")
// const { chats } = require("./data/data");
// const connectDB = require('./config/db');
// const userRoutes = require("./routes/userRoutes")
// const chatRoutes = require("./routes/chatRoutes")
// const messageRoutes = require("./routes/messageRoutes")

// const {notFound,errorHandler} = require("./middlewares/errorMiddleware")
// dotenv.config();

// const app = express();

// app.use(express.json())
// app.get('/', (req,res)=>{
// res.send("API is Running")
// })

// app.use('/api/user', userRoutes)
// app.use('/api/chat', chatRoutes)
// app.use('/api/message', messageRoutes)
// app.use(notFound)
// app.use(errorHandler)

//     const PORT = process.env.PORT || 5000
//     connectDB();
// app.listen(5000, console.log(`Server Started on PORT ${PORT}`))


const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");

const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
dotenv.config();

const app = express();

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("API is Running");
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
connectDB();

app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
