import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import "mdbreact/dist/css/mdb.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";

ReactDOM.render(
  // <React.StrictMode>
     <Router>
        <App />
     </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);
