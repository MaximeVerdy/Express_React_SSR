// to deal with commonJS in Express and React modules files transpiling
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx']
});
require('ignore-styles');

// server config
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const {SmallCompo} = require('./src/components/SmallCompo.jsx');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    const componentStr = ReactDOMServer.renderToString(React.createElement(SmallCompo));

    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>React SSR with Client-Side Hydration</title>
    </head>
    <body>
      <div id="root">${componentStr}</div>
      <script src="/bundled-client.js"></script>
    </body>
    </html>
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});