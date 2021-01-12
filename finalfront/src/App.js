import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from './components/logo/logo.js';
import Team from './components/team/team.js';
import AjoutPlayer from './components/Ajout/ajoutPlayer.js'
import AjoutTeam from './components/Ajout/ajoutTeam.js'
import Footer from './components/footer/footer.js';
import Navbar from './components/navbar/navbar.js';
import AjoutLigue from './components/Ajout/ajoutLigue.js';
import Edit from './components/edit/edit.js'

class App extends React.Component{
  render(){
    return(
      <div className="container">
        <Router>
           <Logo/>
           <Navbar/>
          <Route path="/ajoutPlayer" component={AjoutPlayer} />
          <Route path="/ajoutTeam" component={AjoutTeam} />
          <Route path="/ajoutLigue" component={AjoutLigue} />
          <Route path="/edit/:id" component={Edit}/>
          <Route path="/team" component={Team} />
            
            <Footer/>
        </Router>
         </div>
    )
  }
}

export default App;
