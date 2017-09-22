import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('[GET][/]');
  console.log('REQUEST [/]');
});

app.get('/home', (req, res) => {
  res.send('[GET][/home]');
  console.log('REQUEST [/home]');
});

app.get('/curso', (req, res) => {
  res.send('[GET][/curso]');
  console.log('REQUEST [/curso]');
});

app.listen(9090, () => {
  console.log('Server running at http://localhost:9090/');
});
