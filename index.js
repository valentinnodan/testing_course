const express = require('express');

const app = express();

app.get('/autorize', (req, res) => {
    const me = {name: 'Valentina', surname: 'Danilova'};
    res.json(me);
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));