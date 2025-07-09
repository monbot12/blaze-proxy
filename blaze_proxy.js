
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/rodadas', async (req, res) => {
  try {
    const r = await fetch('https://blaze.com/api/roulette_games/recent');
    const data = await r.json();
    const resultado = data.map(jogo => ({
      color: jogo.color === 1 ? 'red' : jogo.color === 2 ? 'black' : 'white'
    }));
    res.json(resultado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('🔥 Proxy Blaze rodando com sucesso!');
});
