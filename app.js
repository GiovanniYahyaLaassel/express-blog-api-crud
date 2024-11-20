// Configurazione base di express

const express = require('express');
const app = express();

//uso i middleware 
app.use(express.json());

// importo il router 
const postsRouter = require('./routers/posts');

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