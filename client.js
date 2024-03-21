// This script hydrates the server-rendered React component on the client-side

import React from 'react'; 
import ReactDOM from 'react-dom';
import {SmallCompo} from './src/components/SmallCompo.jsx';

// Hydrate the SmallCompo component on the client-side, 
// enabling it to be interactive and reactive after the initial page load.
ReactDOM.hydrate(
  <SmallCompo />, 
  document.getElementById('root') // Mount the component to the 'root' element in the HTML
);

