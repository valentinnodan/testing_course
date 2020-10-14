const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/authorize', (req, res) => {
    if (res.body.login === 1 && res.body.password === 1) {
        const me = {name: 'Valentina', surname: 'Danilova'};
        res.json(me);
    }
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));