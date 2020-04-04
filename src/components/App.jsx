import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/aboutMe'
import Form from './pages/Form'
import NavBar from './navBar/navBar'
import BloodStore from './pages/bloodStore'
import Notfound from './pages/notFound'

const App = () => {
    return ( 
        <Router>       <React.Fragment>
             <NavBar />
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/form' component={Form} />
        <Route path='/bloodStore' component={BloodStore} />
        <Route component={Notfound} />
        </Switch>
     
        </React.Fragment>
        </Router>
 
     );
}
 
export default App;