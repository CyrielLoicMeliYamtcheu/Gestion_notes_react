import { Col, Container, Row, Navbar, Form, Button, Nav, } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function InscriptionEtudiant(){

    const [inputPrenom, setInputPrenom] = useState('')
    const [inputNom, setInputNom] = useState('')
    const [inputMatricule, setInputMatricule] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputNiveau, setInputNiveau] = useState('')
    const [inputSpecialite, setInputSpecialite] = useState('')
    const [inputImage, setInputImage] = useState('')

    const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    matricule: '',
    niveau: '',
    specialite: '',
    image: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    handleClick()
  }, [])

  function handleClick(){
      let min = 1;
      let max = 100;
      let rand =  String(min + (Math.random() * (max-min))) 
      alert("le matricule est ", rand)
      //this.setState ({this.state.random : rand})
   }
   
  async function save() {
    await axios.post('http://localhost:3100/signup/', form)
    setForm('')
    // navigate('/produits')
  }
   

    return (
// fluid

        <Navbar bg="light" expand="lg" class="navbar navbar-expand-lg navbar-light bg-light">
            <Row type="flex" justify="center" align="center">
                <Container  >
                
                   <content contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}> 
                
                        <Form className='inscription-form'align="center" onSubmit={(e) => {
                        e.preventDefault()
                        save()
                        }}>
                            <h2 >ESPACE D'INSCRIPTION ETUDIANT</h2>
                            <div className='form-content'>
                            
                                <Button variant="ESPACE D'INSCRIPTION ETUDIANT" size="lg" active>
                                        
                                </Button>{' '}

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Prenom
                                    </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="prenom" placeholder="Prenom" 
                                        value={inputPrenom}
                                        onChange={(e) => setInputPrenom(e.target.value)}
                                        />
                                        </Col>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Nom
                                        </Form.Label>
                                        <Col sm={10}>
                                    <Form.Control type="nom" placeholder="Nom"
                                     value={inputNom}
                                     onChange={(e) => setInputNom(e.target.value)}
                                    />
                                        </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Email
                                        </Form.Label>
                                        <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" 
                                     value={inputEmail}
                                     onChange={(e) => setInputEmail(e.target.value)}
                                    />
                                        </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Matricule
                                        </Form.Label>
                                        <Col sm={10}>
                                    <Form.Control type="matricule" placeholder="Matricule" />
                                        </Col>
                                </Form.Group>

                                


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Niveau
                                    </Form.Label>
                                        <Col sm={10}>
                                        <Form.Select defaultValue="Choose..."placeholder="Niveau"  value={inputNiveau}
                                        onChange={(e) => setInputNiveau(e.target.value)}>
                                            <option>Master 1</option> 
                                            <option>Master 2</option> 
                                            <option>Licence</option>    
                                        </Form.Select> 
                                         </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Specialite
                                    </Form.Label>
                                        <Col sm={10}>
                                        <Form.Select defaultValue="Choose..."placeholder="Specialite"  value={inputSpecialite}
                                        onChange={(e) => setInputSpecialite(e.target.value)}>
                                            <option>Cybersecurite</option> 
                                            <option>Data Analytics</option> 
                                            <option>Blockchain</option>    
                                        </Form.Select> 
                                         </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Charger votre photo
                                    </Form.Label>

                                    <Col sm={10}>
                                        
                                        <div>
                                            <input class="form-control form-control-lg" id="formFileLg" type="file"></input>
                                            <label for="formFileLg" class="form-label"></label>
                                        </div>

                                    </Col>
                                </Form.Group>
                                    <Container>
                                        <Row>
                                            <Col sm={6}>

                                            <Button variant="secondary">Annuler</Button>{' '}&nbsp;
                                            </Col>
                                            <Col sm={4}>
                                            <Button variant="success">S'inscrire</Button>{' '}&nbsp;
                                            </Col>
                                        </Row>
                                    </Container>
                    
                            </div>
                            

                        </Form>
                    </content>

                </Container>
            
            </Row>

        </Navbar>

    

    );
}





