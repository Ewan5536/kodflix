const shows = require('./shows.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

app.get('/rest/shows', (req, res) => res.send(shows()))
app.use(express.static(path.join(__dirname, '../../build')));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

