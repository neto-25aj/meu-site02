const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('<h1>PaginaInicial</h1>'));
app.get('/sobre', (req, res) => res.send('<h1>Sobre</h1>'));
app.get('/contato', (req, res) => res.send('<h1>Contato</h1>'));

app.listen(PORT, () => console.log('Rodando na porta ' + PORT));