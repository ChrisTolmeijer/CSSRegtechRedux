const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001

const filings = [
    {
        name: "Test filing 1",
        category: "A",
        date: new Date(),
    },
    {
        name: "Test filing 2",
        category: "A",
        date: new Date(),
    },
    {
        name: "Test filing 3",
        category: "C",
        date: new Date(),
    },
    {
        name: "Test filing 4",
        category: "B",
        date: new Date(),
    }
]


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send(JSON.stringify(filings)));

app.post('/', (req, res) => {
    if(req.body) {
        const filing = { ...req.body, date: new Date() };
        filings.push(filing);
        res.send({ status: 'success', filing });
    }
    else {
        res.send({ status: 'success' });
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))