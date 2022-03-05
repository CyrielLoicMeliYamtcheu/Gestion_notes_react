import { Link } from 'react-router-dom'  
import {Nav} from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import NavContext from '../ComponentContext';

export default function NavBar({etudiant, enseignant}){

    const [user, setUser] = useState("")
   
useEffect(() => {
     userConnecte()
  
}, [])

    // // fonction de verification d'un user connecté
     function userConnecte(){
        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data.nom)
        console.log(data.prenom)
        console.log(data.role)

        
      // let data = "Etudiant"
        if(data.role === "Etudiant"){
                setUser("etudiant")
                 console.log("je suis connecté en tant que etudiant")
        }else if(data.role === "Enseignant"){
                setUser("enseignant")
                console.log("je suis connecté en tant que enseignant")
        }else{
            console.log("je suis !!!!")
        }
       
        
    }

    function show(user){
        if(user === "enseignant"){
            return (<Nav1 />)
        }else if(user === "etudiant"){
            return (<Nav2 />)
        }else{
           return (<Nav3 />)
        }

    }


    function Nav1(){

        return (
            <>
                 <li class="nav-item">
                <Link class="nav-link" to="/">Accueil</Link>
            </li>

            <li class="nav-item">
               
                <Link class="nav-link" to="/gerer-notes">gerer-notes</Link>
            </li>
        
            <li class="nav-item">
                <Link class="nav-link" to="/login">Se deconnecter</Link>
            </li>
            </>
        )
    }

    function Nav2(){
        return (
            <>
                    <li class="nav-item">
                  <Link class="nav-link" to="/">Accueil</Link>
                </li>

              <li class="nav-item">
               
                  <Link class="nav-link" to="/consulter-notes">Consulter Notes</Link>
                </li>
        
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se deconnecter</Link>
                </li>
            </>
        )
    }

    function Nav3(){
        return (
            <>
                  <li class="nav-item">
                  <Link class="nav-link" to="/">Accueil</Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se connecter</Link>
                </li>
            </>
        )
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

        { show(user) }
        
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    );
}
