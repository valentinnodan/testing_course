const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let people = {
    1:
        {
            name: 'Valentina Danilova',
            coins: []
        }
    ,
    2:
        {
            name: 'Ololo Ololoev',
            coins: []
        }
}

app.get('/api/authorize', (req, res) => {
    if (req.query.login in people) {
        res.json(people[req.query.login]);
    } else {
        res.json(req.query)
    }
})
app.post('/api/budget', (req, res) => {
    if (req.query.userLogin in people) {
        people[req.query.userLogin].coins.push({
            date: req.query.date,
            name: req.query.name,
            value: req.query.value
        })
        res.json(people[req.query.userLogin].coins);
    } else {
        res.json(req.query)
    }
})

app.post('/api/register', (req, res) => {
    if (!(req.query.login in people)) {
        people[req.query.login] = {
            name: req.query.name,
            coins: []
        }
        console.log(people)
        res.json({name: people[req.query.login].name});
    } else {
        res.json(req.query)
    }
})

app.get('/api/budget', (req, res) => {
    if (req.query.userLogin in people) {
        res.json(people[req.query.userLogin].coins)
    }
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));