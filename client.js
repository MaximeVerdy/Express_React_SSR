import React from 'react';
import ReactDOM from 'react-dom';
import {SmallCompo} from './src/components/SmallCompo.jsx';

ReactDOM.hydrate(
  <SmallCompo />,
  document.getElementById('root')
);