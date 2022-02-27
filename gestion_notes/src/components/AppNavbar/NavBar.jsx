import { Link } from 'react-router-dom'  
import {Nav} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import Header from './Header';
import axios from 'axios';

export default function NavBar(props){

    const [state, setState] = useState("0")

useEffect(() => {
    userConnecte()
}, [])

    // fonction de verification d'un user connecté
    async function userConnecte(){

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data.nom)
        console.log(data.prenom)
        console.log(data.role)

        if(data.role === "Etudiant"){
                setState("1")
        }else if(data.role === "Enseignant"){
                setState("2")
        }
        
      
       
    }

    

    

    return (
      <div>
        <Nav class="navbar navbar-expand-lg navbar-light px-5" style={{
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

    
          { state === "1" }
   
            <li class="nav-item">
                <Link class="nav-link" to="/">Accueil</Link>
            </li>

            <li class="nav-item">
               
                <Link class="nav-link" to="/consulter-notes">Consulter Notes</Link>
            </li>
        
            <li class="nav-item">
                <Link class="nav-link" to="/login">Se deconnecter</Link>
            </li>
            

            { state === "2" }
                    <li class="nav-item">
                  <Link class="nav-link" to="/">Accueil</Link>
                </li>

              <li class="nav-item">
               
                  <Link class="nav-link" to="/consulter-notes">Consulter Notes</Link>
                </li>
        
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se deconnecter</Link>
                </li>

                { state === "0"}
                 <li class="nav-item">
                  <Link class="nav-link" to="/">Accueil</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se connecter</Link>
                </li>
               
               

              </ul>
            </div>
          </div>
        </Nav>
      </div>
    );
}

 