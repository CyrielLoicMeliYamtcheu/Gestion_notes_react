import { Form, Button, Row, Col } from "react-bootstrap"

export default function Login(){
    return (

       <Form className = "mt-5">
           <Row className="align-items-center">
             <Col sm={6} className="my-1">
                <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" size="lg">
            Se Connecter
        </Button>
       
        <br></br>
    <Form.Select className = "mt-3" aria-label="Default select example">
  <option>Choisir son status</option>
  <option value="1">Etudiant</option>
  <option value="2">Enseignant</option>
 
</Form.Select>
        </Col>
        </Row>
</Form>
    )
}