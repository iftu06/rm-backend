const express = require('express');
const cors = require('cors');
const app = express()

const port = 8095;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello there!')
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})

app.post('/registration', async (req, res) => {
    const reg = req.body;
    console.log('hit the post api', reg);
    res.send('post hitted')
})