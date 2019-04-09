const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

mongoose.connect('mongodb://filipefilpe:piaui1794@ds135456.mlab.com:35456/omnistack',
    {
        useNewUrlParser: true
    }
);

app.use((req, res, next) => {
    req.io = io;
    return next();
});

// use: cadastrar um módulo
// express.json: entende json
app.use(express.json());
// permite envio de arquivos
app.use(express.urlencoded({ extended: true }));
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

//pega arquivo de rotas
app.use(require('./route'));

server.listen(3000);