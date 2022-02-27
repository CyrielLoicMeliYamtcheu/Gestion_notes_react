import { Col, Container, Row, Navbar, Form, Button, Nav, } from 'react-bootstrap'
import {useState, useEffect} from 'react'
export default function InscriptionEnseignant(){
    
    const [field, setField] = useState([])  

    function show(){
        field.map((item, indice) => {
          console.log("hello")
          console.log(indice)
          console.log(item)
        })
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
                                                  Prénom :
                                              </Form.Label>
                                                  <Col sm={10}>
                                                  <Form.Control type="prénom"  />
                                                  </Col>
                                          </Form.Group>
          
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Nom :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="nom"  />
                                                  </Col>
                                          </Form.Group>


                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Matricule :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="email" />
                                                  </Col>
                                          </Form.Group>
          
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Email :
                                                  </Form.Label>
                                                  <Col sm={10}>
                                              <Form.Control type="email" />
                                                  </Col>
                                          </Form.Group>
          
          
                                          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                              <Form.Label column sm={2}>
                                                  Matière :
                                              </Form.Label>
                                                  <Col sm={10}>
                                                <Form.Select defaultValue="Niveau" onClick = {show} className="form-control"
                                             as="select" multiple value={field} onChange={e => setField([].slice.call(e.target.selectedOptions).map(item => item.value))}>
                                                  <option>Cybersécurité Clouding</option>
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