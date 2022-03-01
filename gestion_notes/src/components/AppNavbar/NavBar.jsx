import { Link } from 'react-router-dom'  
import {Nav} from 'react-bootstrap'

export default function NavBar(){
    return (
      <div>
        <Nav className="navbar navbar-expand-lg navbar-light px-5" style={{
        backgroundColor: '#a0d8eb',
        width: '100%',
        height: '60px',
        color: '#ffffff'
      }}>
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.jpg" alt="..." height="50"/>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>  
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Accueil</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gerer-notes">Gerer les notes</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/etudiant">Etudiant</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Se deconnecter</Link>
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    );
}
