import { Link } from 'react-router-dom';  
import NavBar from '../components/AppNavbar/NavBar';
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';
import { Form, Button, Table } from 'react-bootstrap'

export default function Etudiant(){

 return(
  <div classNameName='mt-5'>
    <div className="bg-white">
        <div className="container">
        <div className="row" style={{marginTop: '10%'}}>
          <div className="col-4">
            <img src="https://bootdey.com/img/Content/avatar/avatar6.png"  className="ui-w-70 rounded-circle"/><br></br>
          </div>
          <div className="col-8" style={{marginTop: '6%'}}>
            <div className="card my-4">
              <div className="card-body">
                <strong>NOM : </strong> Pierre <br></br>
                <strong>PRENOM : </strong> Roland<br></br>
                <strong>NIVEAU : </strong> 4 ème année<br></br>
                <strong>SPECIALITE :  </strong>Big data et IA<br></br>
                <strong>MATRICULE :  </strong>ecoleit125478ia<br></br>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-5">


          <div className="text-muted mb-4">

            </div>
          </div>
          <div className="text-center">
            <table className="table table-striped">
              <thead>
                <tr  className="table-primary" className="table-primary">
                  <th scope="col">Code module</th>
                  <th scope="col">Nom de la matière</th>
                  <th scope="col">Notes</th>
                  <th scope="col">Coefficient</th>
                  <th scope="col">Appréciation</th>
                  <th scope="col">Nom du professeur</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="col" colSpan="6" className="table-success">block-A Appréhender son environnement et son métier</th>
                </tr>
                <tr>
                  <th scope="col">4AS854</th>
                  <th scope="col">Angular JS</th>
                  <th scope="col">10.5</th>
                  <th scope="col">2</th>
                  <th scope="col">passable</th>
                  <th scope="col">M. Pierre thomas</th>
                </tr>
              </tbody>
            </table>
    </div>
      </div>
      </div>
    </div>
 );
    
}