import { Link, useNavigate } from 'react-router-dom'  
import {Nav, Button} from 'react-bootstrap'
import { useState, useEffect, useContext  } from 'react'
import axios from 'axios';

export default function NavBar(){

    const [user, setUser] = useState("")
    const navigate = useNavigate()
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")


    // // fonction de verification d'un user connecté
     function userConnecte(){
       console.log("Running");
        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data?.nom)
        console.log(data?.prenom)
        console.log(data?.role)
        setNom(data.nom)
        setPrenom(data.prenom)


        
      // let data = "Etudiant"
        if(data?.role === "Etudiant"){
                setUser("etudiant")
                 console.log("je suis connecté en tant que etudiant")
        }else if(data?.role === "Enseignant"){
                setUser("enseignant")
                console.log("je suis connecté en tant que enseignant")
        }else{
            console.log("je suis !!!!")
        }
       
        
    }

    
    useEffect(() => {
        userConnecte()
    }, [user])


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
                
                <Button onClick={() => { 
                   sessionStorage.removeItem('user');
                   setUser("");
                   navigate('/login')
                }}>Se deconnecter </Button>
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
               
                  <Link class="nav-link" to="/etudiant">Consulter Notes</Link>
                </li>
        
                <li class="nav-item">
                  <Button onClick={() => { 
                   sessionStorage.removeItem('user');
                   setUser("");
                   navigate('/login')
                }}>Se deconnecter </Button>
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
            </Link><h5> BIENVENUE Mr {prenom} {nom} </h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>  
            <div class="collapse navbar-collapse flex-row-reverse" id="navbarNav">
              <ul class="navbar-nav">
                
                {!user ? <Nav3 /> : ( user === "enseignant" ? <Nav1 /> : <Nav2 />) }
              </ul>
            </div>
          </div>
        </Nav>
      </div>
    );
}
