import { Link } from 'react-router-dom'  

export default function Header(props){

    return(
        <>
              <li class="nav-item">
               
                  <Link class="nav-link" to="/gerer-notes">{props.nom}</Link>
                </li>
        
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Se deconnecter</Link>
                </li>

        </>
    )
}