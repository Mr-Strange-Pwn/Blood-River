import React from 'react'
import ReactDom from 'react-dom'
import App from './components/App'
import 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(  
   <Router>
    <App />
    </Router>
     , document.getElementById("root"))
