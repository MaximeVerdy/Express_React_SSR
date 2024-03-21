// This script hydrates the server-rendered React component on the client-side

import React from 'react'; 
import ReactDOM from 'react-dom';
import {SmallCompo} from './src/components/SmallCompo.jsx';

// executed during the build process to create bundled-client.js (used for hydration when HTML page is initialised)
ReactDOM.hydrate(
  <SmallCompo />, 
  document.getElementById('root') // Mount the component to the 'root' element in the HTML
);

