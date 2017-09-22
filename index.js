import express from 'express';

const app = express();
let requestCounter = 0;

app.get('/', (req, res) => {
  requestCounter++;
  res.send('[GET][/]');
  console.log('REQUEST: ', requestCounter);
});

app.get('/home', (req, res) => {
  requestCounter++;
  res.send('[GET][/home]');
  console.log('REQUEST: ', requestCounter);
});

app.get('/curso', (req, res) => {
  requestCounter++;
  res.send('[GET][/curso]');
  console.log('REQUEST: ', requestCounter);
});

app.listen(9090, () => {
  console.log('Server running at http://localhost:9090/');
});
