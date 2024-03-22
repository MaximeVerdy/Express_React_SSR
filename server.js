// Babel is used to Transpile Express modules and React modules 
// into a compatible format that can be executed by the targeted JavaScript runtime environment.
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  extensions: ['.js', '.jsx']
});
// Ignore CSS imports during server-side rendering to avoid potential issues
require('ignore-styles');

// Import modules required for rendering React components on the server before hydration
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const {SmallCompo} = require('./src/components/SmallCompo.jsx'); 


// Server configuration
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {

  // In SSR, the initial HTML content needs to be generated on the server and sent to the client. 
  // React components cannot be directly sent over HTTP because they are JavaScript objects. 
  // Instead, they need to be converted into HTML strings.
  // NB : Until the future hydration, the page will be complete in terms of content but static
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
      <!-- contains client-side JavaScript code responsible for hydration. -->
      <script src="/bundled-client.js"></script>
    </body>
    </html>
  `);
});

app.listen(3000);
