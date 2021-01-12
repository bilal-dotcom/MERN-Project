import React from 'react';
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            // <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            {/* <Link to="/" className="navbar-brand">Accueil</Link> */}
            <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/team" className="nav-link">Team</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/ajoutPlayer" className="nav-link">Joueurs</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/ajoutTeam" className="nav-link">Ajout d'equipes</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/ajoutLigue" className="nav-link">Ajout de Ligue</Link>
                    </li>
                </ul>
            </div>
        </nav>  
        
        )
    }
}

export default Navbar;