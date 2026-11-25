const express = require('express');

const PORT = 3001;

const app = express();

app.get('/', (req, res) => {
    res.send('Lab9 v1 Shlykov');
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});