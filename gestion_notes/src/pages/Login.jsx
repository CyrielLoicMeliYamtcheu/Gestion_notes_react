import { Form, Button, Row, Col, Container } from "react-bootstrap"

export default function Login()  {
    return (
        <Container>

            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">ESPACE DE CONNEXION</h1>
                    <Row className="mt-5">
                   <Col lg ={5} md={6} sm={30} className="p-5 m-auto shadow rounded-lg">
           
   <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
             <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     <br></br>
    <Button className="mb-3" variant="success btn-block" type="submit"> connection </Button><br></br>

        <Form.Select aria-label="Default select example">
             <option>choisir son statut </option>
             <option value="1">Enseignant </option>
             <option value="2">Etudiant</option>
             
      </Form.Select>
  </Form>

<br></br>
<>

  <Button variant="secondary">S'inscrire</Button>{' '}
  
</>

       </Col>
       </Row>
       <h6 className="mt-5 p-5 text-center text-secondary"> Copyright 2022 ecole-it </h6>
</Container>
    )
}