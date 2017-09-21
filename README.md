## Node.JS with Babel

### Setup

```bash
$ npm init

$ npm install --save-dev babel babel-cli babel-preset-env

$ touch index.js
$ touch .babelrc
```

On `.babelrc` write:
```js
{
  "presets": ["env"]
}
```

On `index.js` write:

```js
import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(9090, 'localhost');

console.log('Server running at http://localhost:9090/');
```

Finaly run

```bash
$ npm start
```
