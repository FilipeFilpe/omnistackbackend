const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');


/*
    middleware(interceptador)->
    recebe função recebe e modifica resposta [req, res]

    req: requisição do servidor, dados vindos do client.
    res: retornar uma respota para o client.
    routes.get('/', (req, res) => {
        return res.send('Hello Filipe');
    })
*/
routes.post('/boxes', BoxController.store);
routes.get('/boxes/:id', BoxController.show);
routes.post('/boxes/:id/files',
    multer(multerConfig).single("file"),
    FileController.store
);


// exporta informação de um arquivo
module.exports = routes; // exporta a variavel [routes]