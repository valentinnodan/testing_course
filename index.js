const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/authorize', (req, res) => {
    const me = {name: 'Valentina', surname: 'Danilova'};
    console.log(req.query.login)
    console.log(req.query.password)
    if (req.query.login === '1' && req.query.password === '1') {
        res.json(me);
    } else {
        res.json(req.query)
    }
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));