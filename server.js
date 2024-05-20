const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/updateCoins', (req, res) => {
    const { coins } = req.body;
    // Логика для обновления количества монет в базе данных
    console.log(`Обновлено количество монет: ${coins}`);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});