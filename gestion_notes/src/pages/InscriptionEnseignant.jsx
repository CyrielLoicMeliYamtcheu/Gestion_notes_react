import { Col, Container, Row, Navbar, Form, Button, Nav, } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useLocation, useNavigate} from 'react-router-dom'

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
     const [field, setField] = useState([])

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
                             
                             
                                  <Form className='INSCRIPTION' >
                    
                                      <h1>ESPACE INSCRIPTION ENSEIGNANT</h1>
                              
                                    
                                      <div className='form-content'>

                                      
                                          <Button variant="ESPACE INSCRIPTION ETUDIANT" size="lg" active >
                                                  
                                          </Button>{' '}
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  PrÃ©nom :
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
                                                  Matricule :
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
                                                  Email :
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
                                                  MatiÃ¨re :
                                              </Form.Label>
                                                  <Col sm={10}>
                                                <Form.Select defaultValue="Niveau" className="form-control"
                                             as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                                                  <option>CybersÃ©curitÃ© Clouding</option>
                                                  <option>Big Data</option>
                                                  <option>Devops</option>
                                                  <option>BlockChain</option>
                                                  </Form.Select>
                                                  </Col>
                                          </Form.Group>
          
                                          
                                          <Form.Group as={Row} controlId="formGridState">
                                            <Form.Label column sm={2}>
                                                Niveau :
                                            </Form.Label>
                                            <Col sm={10}> 
                                            <Form.Select defaultValue="Niveau"  >
                                             <option>1</option>
                                             <option>2</option>
                                             <option>3</option>
                                             <option>4</option>
                                             <option>5</option>
                                            </Form.Select>
                                            </Col> 
                                          </Form.Group>
                                          

                                         
                                            
                                          
                                              <Button variant="danger" as="input" type="button" value="Annuler" className="mt-5" />{' '}&nbsp;
                                      
                                              <Button variant="success" as="input" type="submit" value="s'incrire" className="mt-5" />{' '}&nbsp;
          
          
                                      </div>
                                      
          
                                  </Form>
                              </content>
          
                          </Container>
                      
                      </Row>
          
                  </Navbar>
          
              
          
              );

        }
