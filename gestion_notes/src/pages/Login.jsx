import {
    Form,
    Button,
    Row,
    Col,
    Container
} from "react-bootstrap"
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function Login() {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [message, setMessage] = useState("");
    const [choix_status, setChoixStatus] = useState("")

    const [form, setForm] = useState({email: '', password: ''})

    const navigate = useNavigate()

    async function login() {
        add()
        let res = await axios.post('http://localhost:3100/signin/', form)
        console.log(res)
        if (res.status === 200) {
            setForm('')
            reset()
            setMessage("User Login successfully");
            navigate('/')
        } else {
            reset()
            setMessage("Some error occured");
        }
        // navigate('/produits')
    }


    function add() {
        form.email = inputEmail
        form.password = inputPassword
    }

    function reset() {
        setInputEmail("")
        setInputPassword("")
    }

    return (
        <Container>

            <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">ESPACE DE CONNEXION</h1>
            <Row className="mt-5">
                <Col lg ={5}
                    md={6}
                    sm={30}
                    className="p-5 m-auto shadow rounded-lg">

                    <Form align="center"
                        onSubmit={
                            (e) => {
                                e.preventDefault()
                                login()
                            }
                    }>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"
                                value={inputEmail}
                                onChange={
                                    (e) => setInputEmail(e.target.value)
                                }/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                value={inputPassword}
                                onChange={
                                    (e) => setInputPassword(e.target.value)
                                }/>
                        </Form.Group>
                        <br></br>
                        <Button className="mb-3" variant="success btn-block" type="submit">
                            connection
                        </Button>
                        <br></br>

                        <Form.Select aria-label="Default select example"
                            value={choix_status}
                            onChange={
                                (e) => setChoixStatus(e.target.value)
                        }>
                            <option>choisir son statut
                            </option>
                            <option value="/inscriptionEn">Enseignant
                            </option>
                            <option value="/inscriptionEt">Etudiant</option>

                        </Form.Select>
                    </Form>

                    <br></br>

                    <div className="message">
                        {
                        message ? <p>{message}</p> : null
                    }</div>
                    <br></br>
                    <>

                        <Button variant="secondary"
                            as={Link}
                            to={
                                `${choix_status}`
                        }>
                            S'inscrire</Button>
                        {' '} </>

                </Col>
            </Row>
            <h6 className="mt-5 p-5 text-center text-secondary">
                Copyright 2022 ecole-it
            </h6>
        </Container>
    )
}
