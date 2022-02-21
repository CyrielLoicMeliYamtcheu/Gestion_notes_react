import { Col, Container, Row, Navbar, Form, Button, Nav, } from 'react-bootstrap'
export default function InscriptionEtudiant(){
    return (
// fluid

        <Navbar bg="light" expand="lg" class="navbar navbar-expand-lg navbar-light bg-light">
            <Row type="flex" justify="center" align="center">
                <Container  >
                
                   <content contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}> 
                
                        <Form className='inscription-form'align="center">
                            <h2 >ESPACE D'INSCRIPTION ETUDIANT</h2>
                            <div className='form-content'>
                            
                                <Button variant="ESPACE D'INSCRIPTION ETUDIANT" size="lg" active>
                                        
                                </Button>{' '}

                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Prenom
                                    </Form.Label>
                                        <Col sm={10}>
                                        <Form.Control type="prenom" placeholder="Prenom" />
                                        </Col>
                                </Form.Group>



                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Nom
                                        </Form.Label>
                                        <Col sm={10}>
                                    <Form.Control type="nom" placeholder="Nom" />
                                        </Col>
                                </Form.Group>


                                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Email
                                        </Form.Label>
                                        <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email" />
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
                                        <Form.Select defaultValue="Choose..."placeholder="Niveau" >
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
                                        <Form.Select defaultValue="Choose..."placeholder="Specialite" >
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





