import { Link } from 'react-router-dom';  

export default function NavBar(){
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light px-5" style={{
        backgroundColor: '#a0d8eb',
        width: '100%',
        height: '60px',
        color: '#ffffff'
      }}>
          <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="./logo.jpg" alt="..." height="50"/>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Accueil</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/gerer-notes">Gerer les notes</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se deconnecter</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
