
import "babel-polyfill";
import React from 'react';
import {render} from 'react-dom';
//import Table from './table';
import Table from './table';
const details = require('json!./details');

render(<Table url={details} pollInterval={2000} />, document.getElementById('playlist'));