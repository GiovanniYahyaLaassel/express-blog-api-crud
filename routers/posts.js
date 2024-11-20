// Importo express
const express = require('express');

// creo un'istanza una configurazione 
const router = express.Router();  

router.get('/', (req, res) => {
    console.log('Richiesta GET su /posts');  //verifico la chiamata 
    res.send('Lista dei post');  //risposta che mi conferma la chiamata 
});

// esporto il router per usarlo i altri file

module.exports = router;