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

export default function Login(props) {
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [message, setMessage] = useState("");
    const [choix_status, setChoixStatus] = useState("")

    const [form, setForm] = useState({email: '', password: ''})
    const myStorage = window.sessionStorage;
    const navigate = useNavigate()

  

    async function login() {
        add()
        await axios.post("http://localhost:3100/signinuser/", form).then(res => {

            console.log("data from teacher ", res.data)
            console.log("data from teacher 2 ", res.data.user)

            if (res.status === 200) {
                setForm('')
                reset()
                setMessage("User Login successfully");
                if (res.data.user.role === "Enseignant") {
                    sessionStorage.setItem('user', JSON.stringify(res.data.user));
                    navigate('/')
                } else if (res.data.user.role === "Etudiant") {
                    sessionStorage.setItem('user', JSON.stringify(res.data.user));
                    navigate('/')
                }

            } else {
                reset()
                setMessage("Some error occured");
            }
        })
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
                            <Form.Control type="email" placeholder="Enter email" required
                                value={inputEmail}
                                onChange={
                                    (e) => setInputEmail(e.target.value)
                                }/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required
                                value={inputPassword}
                                onChange={
                                    (e) => setInputPassword(e.target.value)
                                }/>
                        </Form.Group>
                        <br></br>
                        <Button className="mb-3" variant="success btn-block" type="submit">
                            connexion
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
