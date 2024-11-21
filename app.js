// Configurazione base di express
const express = require('express');
const app = express();


// importo il router 
const postsRouter = require('./routers/posts');

// configuro body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());


//uso i middleware 
app.use(express.json());

// configuro il prefisso per tutte le rotte 
app.use('/posts', postsRouter);

// configuro cartella statica 
app.use(express.static('public'));

// Creo la rotta di base

app.get('/', (req, res) => {
    console.log('Richiesta GET su /');
    res.send('Server del mio blog');
});

app.listen(3000, () => {
    console.log('Server avviato su http://localhost:3000');
});