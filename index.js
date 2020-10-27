const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let myCoins = []

app.get('/api/authorize', (req, res) => {
    const me = {name: 'Valentina', surname: 'Danilova'};
    if (req.query.login === '1' && req.query.password === '1') {
        res.json(me);
    } else {
        res.json(req.query)
    }
})
app.post('/api/budget', (req, res) => {
    const me = {name: 'Valentina', surname: 'Danilova'};
    console.log(req.query)
    if (req.query.userName === me.name) {
        console.log("IM HERE")
        myCoins.push({
            date: req.query.date,
            name: req.query.name,
            value: req.query.value
        })
        res.json(myCoins);
        console.log(myCoins);
    } else {
        res.json(req.query)
    }
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));