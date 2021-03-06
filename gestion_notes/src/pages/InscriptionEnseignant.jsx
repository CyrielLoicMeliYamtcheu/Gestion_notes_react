import { Col, Container, Row, Navbar, Form, Button, Nav, } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';


export default function InscriptionEnseignant(){
    
    const [courses, setCourse] = useState([]) 
    const [matieres, setMatiere] = useState([])    
    const [inputPrenom, setInputPrenom] = useState('')
    const [inputNom, setInputNom] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputNiveau, setInputNiveau] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [message, setMessage] = useState("");
     const [niveaux, setNiveaux] = useState([])

    const navigate = useNavigate()

    const [form, setForm] = useState({
        prenom: '',
        nom: '',
        email: '',
        password: '',
        niveau: '',
        matiere: [],
      
    })

     useEffect(() => {
        
        getNiveau()
       getCourse()

    }, [])

   

    async function getNiveau() {
        const datas = await axios.get('http://localhost:3100/niveau')
        console.log(datas.data[0])
        if (datas.data !== null) 
            setNiveaux(datas.data)
    }

    async function getCourse(){
        const datas = await axios.get('http://localhost:3100/matiere')
            console.log("course : " , datas.data)
            if(datas.data !== null){
                
                    setMatiere(datas.data)
            }       
      
    }

     let displayCourse = matieres.map((item, indice) => {
        return (
                 <option key = {indice}>{ item.intitule }</option>
        )
    }) 

      async function save() {
        
        add()
        let res = await axios.post('http://localhost:3100/signupEnseignant/', form)
        console.log(res)
        if (res.status === 201) {
            setForm('')
            reset()
            setMessage("User created successfully");
            navigate('/login')
        } else {
            reset()
            setMessage("Some error occured");
        }
        
    }


     let displayNiveaux = niveaux.map((item, indice) => {
        return (
            <option key={indice}>
                {
                item.nom
            }</option>
        )
    })

   

     function add() {
        form.prenom = inputPrenom
        form.nom = inputNom
        form.email = inputEmail
        form.password = inputPassword
        form.niveau = inputNiveau
        form.matiere = courses
        
    }

     function reset() {
        setInputPrenom("")
        setInputNom("")
        setInputEmail("")
        setInputPassword("")
      
    }


        return (
          // fluid
          
                  <Navbar bg="info" expand="lg" class="navbar navbar-expand-lg navbar-light bg-info" className="mt-5" >
                      <img src="https://image.shutterstock.com/image-photo/happy-french-teacher-explaining-foreign-260nw-2066856038.jpg" height={400} width={500} className='mr-3'></img>
                      <Row type="flex" justify="center" align="center" >
              
    
                          <Container className="container-fluid py-5" >
                          
                             <content contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}> 
                             
                             
                                  <Form className='INSCRIPTION'  onSubmit={
                                (e) => {
                                    e.preventDefault()
                                    save()
                                } }>
                    
                                      <h1>ESPACE INSCRIPTION ENSEIGNANT</h1>
                              
                                    
                                      <div className='form-content'>

                                      
                                          <Button variant="ESPACE INSCRIPTION ETUDIANT" size="lg" active >
                                                  
                                          </Button>{' '}
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Pr??nom :
                                              </Form.Label>
                                                  <Col sm={10}>
                                                  <Form.Control type="text" required  
                                                   value={inputPrenom}
                                                    onChange={
                                                        (e) => setInputPrenom(e.target.value)
                                                    }
                                                  />
                                                  </Col>
                                          </Form.Group>
          
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Nom :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="text"  required
                                                 value={inputNom}
                                            onChange={
                                                (e) => setInputNom(e.target.value)
                                            }
                                              
                                              />
                                                  </Col>
                                          </Form.Group>

          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Email :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="email" required
                                                 value={inputEmail}
                                            onChange={
                                                (e) => setInputEmail(e.target.value)
                                            }
                                              />
                                                  </Col>
                                          </Form.Group>
          
                                            
                                             <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Password :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="password" required
                                                 value={inputPassword}
                                            onChange={
                                                (e) => setInputPassword(e.target.value)
                                            }
                                              />
                                                  </Col>
                                          </Form.Group>
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Mati??re :
                                              </Form.Label>
                                                  <Col sm={10}>
                                                <Form.Select defaultValue="Matiere"  className="form-control"
                                             as="select" multiple 
                                             value={courses} onChange={e => 
                                             setCourse([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                                                
                                               { displayCourse }
                                                  </Form.Select>
                                                  </Col>
                                          </Form.Group>
          
                                          
                                          <Form.Group as={Row} controlId="formGridState">
                                            <Form.Label column sm={2}>
                                                Niveau :
                                            </Form.Label>
                                            <Col sm={10}> 
                                            <Form.Select defaultValue="Niveau" 
                                             value={inputNiveau}
                                            onChange={
                                                (e) => setInputNiveau(e.target.value)
                                        }
                                            >
                                            { displayNiveaux }
                                           
                                            </Form.Select>
                                            </Col> 
                                          </Form.Group>
                                          <div className="message">
                                        {
                                        message ? <p>{message}</p> : null
                                    }</div>

                                    <Button variant="danger" as="input" type="button"  onClick = {reset} value="Annuler" className="mt-5" />{' '}&nbsp;
                                      
                                    <Button variant="success" as="input" type="submit" value="s'incrire" className="mt-5" />{' '}&nbsp;
          
          
                                      </div>
                                      
          
                                  </Form>
                              </content>
          
                          </Container>
                      
                      </Row>
          
                  </Navbar>
          
              
          
              );



}