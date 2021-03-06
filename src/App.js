import React from 'react';
import Home from './Home';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Skills from './Skills';
import {BrowserRouter, Route} from 'react-router-dom';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return(
            <div className='container-fluid'>
           
                
            <BrowserRouter>
                <Nav/>
                <div className="container-fluid" >
                <Route path='/' exact component={Home} />
                <Route path='/projects'  component={Projects} />
                <Route path='/social-profiles' component={SocialProfiles} />
                <Route path='/skills' component={Skills} />
                </div>
            </BrowserRouter>
           
            </div>
       
    )

}

export default App;