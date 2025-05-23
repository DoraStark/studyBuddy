const express = require('express');
const app = express();
const port = 3001;


app.get('/', (req, res) => {
    res.send('Welcome! Go to <a href="/hello">Hello Page</a>');
  });

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});