import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';
import { Form, Button, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function GestionNote(){

  const [field, setField] = useState([])
  const [message, setMessage] = useState("")
  const [course, setCourse] = useState([])
  const [infosTeacher, setInfosTeacher] = useState({})
  const [specialite, setSpecialites] = useState([])
  const [listeEtudiant, setListeEtudiant] = useState([])
  const [special, setSpecial] = useState("")
  const [note, setNote] = useState("")

  function show(){
    field.map((item, indice) => {
      console.log("hello")
      console.log(indice)
      console.log(item)
     
    })
  }
  const navigate = useNavigate()

  useEffect(() => {

      getCourseForTeacher()
      
    }, [])

     async function getCourseForTeacher() {
        await axios.get('http://localhost:3100/enseignant/6218c00812faa2772c5a1dec').then((datas) => { 
              console.log(datas.data)
              if (datas.data !== null){
                console.log("donnees : ", datas.data.matiere)
                setCourse(datas.data.matiere)
                course.map(item => setSpecialites(item.specialite)
                )
              }
            })      
    }

   
   console.log("taille liste specialite" , specialite.length)

    let displaySpecialite = specialite.map((item, indice) => {
      return (
        <option key = {indice}>{item.nom}</option>
      )
    })


    let displayCourse = course.map((item2,indice2) => { 
      return( 
      <option key = {indice2}>{item2.intitule}</option>
      )
    })
   

     async function getInfosForOneTeacher() {
        const datas = await axios.get('http://localhost:3100/authcheckerEns')
        console.log(datas.data)
        console.log(datas.Enseignant)
        console.log(datas.Enseignant.email)
        if (datas.data !== null) 
            setInfosTeacher(datas.Enseignant.email)
    }

  async function getEtudiantByNiveauSpecialite(){
    await axios.get('http://localhost:3100/etudiant/'+ special).then((datas) => {
      if(datas !== null ){
        console.log("liste etudiants " , datas.data)
        setListeEtudiant(datas.data)
      }
   })
  }  

  let displayEtudiant = listeEtudiant.map((item, indice) => {
     return (
          <tr key = {indice + 1}>
                <th scope="row">{indice +1 }</th>
                <td>{item.matricule}</td>
                <td>{item.nom}</td>
                <td>{item.prenom}</td>
                <td>
                  <Form.Control type="number" className={'form-control w-25'} value={note}
                    onChange={
                      (e) => setNote(e.target.value)
                  }/>
                </td>
                <td>
                  <Button type="button" className="btn btn-primary">Modifier</Button>
                </td>
        </tr>
     )
      
  })

  async function save_note() {
        
        let res = await axios.post('http://localhost:3100/note/', )
        console.log(res)
        if (res.status === 201) {
          
            setMessage("User created successfully");
            navigate('/login')
        } else {
          
            setMessage("Some error occured");
        }
        // navigate('/produits')
    }
  
  /*  function checkDay() {
        //let now = new Date();
        let myTab = document.getElementById('myTable');
        console.log(myTab);
        //let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        //let today = days[now.getDay()];
        for (let i = 0; i < listeEtudiant.rows.length; i++) {
            let content = myTab.rows.item(i).cells;
            console.log("content is : " , content);
           
        }
    }
    */

    return (
      <div className='mt-5'>
        <NavBarGestionNotes nom = "GESTION DES NOTES"/>
        <div className='container' style={{
            marginTop: '50px',
          }}>
          <Form className='mt-4' >
            <div className="row">
                <div className="form-group col-5">
                  <Form.Label>Matière</Form.Label>
                  <Form.Select className="form-control" 
                  as="select" multiple value={field} onChange={e => 
                    setField([].slice.call(e.target.selectedOptions).map(item => item.value))}
                  >
                    { displayCourse }         
                    
                  </Form.Select>
                </div>
                <div className="form-group col-5">
                  <Form.Label>Filière</Form.Label>
                  <Form.Select className="form-control"  value={special}
                    onChange={
                      (e) => setSpecial(e.target.value)
                    } >
                    { displaySpecialite }
                  </Form.Select>
                </div>
                
                <Button onClick={getEtudiantByNiveauSpecialite}  className="btn btn-info col-2 h-50" style={{marginTop:'22px'}}>Afficher liste des eleves</Button>
               
            </div>
   
          </Form>
          <Table className="table table-hover table-bordered" style={{marginTop:'22px'}} 
          id = "myTable">
            <thead className='table-primary'>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Matricule</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom</th>
                <th scope="col">Notes</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              
              { displayEtudiant }

            </tbody>
          </Table>
        <Button type="submit" className="btn btn-success w-100">Enregistrer</Button>
        </div>
      </div>
    );
}