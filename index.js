const express = require('express');
const app = express();
const morgan = require('morgan');
const http = require('http').createServer(app);
const cors = require('cors');
const io = require("socket.io")(http, {
    // cors: { origin: ['http://localhost:3000', 'http://localhost:5050', '/\.ngrok\.io$/'] }
    cors: { origin: '*' }
});
const routes = require('./routes');
const utils = require('./utils').exec();

if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

app.use(cors({
    // origin: ['http://localhost:3000', 'http://localhost:5050', '/\.ngrok\.io$/']
    origin: '*'
}));
app.options('*', cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/dist'));
app.use('/api/v1', routes);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

io.on('connection', (socket) => {
    console.log(`user with id ${socket.id} connected`);
    socket.on("disconnecting", () => {
        console.log(`User ${socket.id} disconnecting from`, socket.rooms);
    });
    socket.on("join", (data) => {
        console.log("user joined room: " + data.room);
        socket.join(data.room);
    });
    socket.on("login", (data) => {
        console.log(data);
        socket.to(data.room).emit("login", data);
    });
});

app.all('*', (req, res) => {
    res.status(404).send({
        message: 'Not Found'
    });
});

const PORT = process.env.PORT || 8080;
http.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
});