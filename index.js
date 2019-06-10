const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    // res.send('halo, dear');
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req, res) => {
    const nama = req.body.nama;
    res.send(`namamu adalah ${nama}`);
});

app.listen(3000, () => {
    console.log('server works!');
})