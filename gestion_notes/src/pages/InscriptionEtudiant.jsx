import {
    Col,
    Container,
    Row,
    Navbar,
    Form,
    Button,
    Nav
} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useParams, useNavigate} from 'react-router-dom'
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';


export default function InscriptionEtudiant() {

    const [inputPrenom, setInputPrenom] = useState('')
    const [inputNom, setInputNom] = useState('')
    const [inputMatricule, setInputMatricule] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputNiveau, setInputNiveau] = useState('')
    const [inputSpecialite, setInputSpecialite] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputImage, setInputImage] = useState(null)
    const [message, setMessage] = useState("");
    const [niveaux, setNiveaux] = useState([])
    const [specialites, setSpecialites] = useState([])


    const [form, setForm] = useState({
        prenom: '',
        nom: '',
        email: '',
        password: '',
        matricule: '',
        niveau: '',
        specialite: '',
        image: ''
    })

    const navigate = useNavigate()

    function handleClick() {
        let min = 10000;
        let max = 90000;
        let rand = (Math.floor(Math.random() * min) + max).toString()
        setInputMatricule(rand)

    }

    async function save() {
        console.log("helloooo")
        add()
        let res = await axios.post('http://localhost:3100/signup', form)
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

    function add() {
        form.prenom = inputPrenom
        form.nom = inputNom
        form.email = inputEmail
        form.password = inputPassword
        form.matricule = inputMatricule
        form.niveau = inputNiveau
        form.specialite = inputSpecialite
        form.image = inputImage
        // alert(form.matricule)
    }

    function reset() {
        setInputPrenom("")
        setInputNom("")
        setInputEmail("")
        setInputPassword("")
        setInputImage(null)
        
    }

    useEffect(() => {
        getNiveau()
        getSpecialite()
        handleClick()
    }, [])

    async function getNiveau() {
        const datas = await axios.get('http://localhost:3100/niveau')
        console.log(datas.data[0])
        if (datas.data !== null) 
            setNiveaux(datas.data)
    }


    let displayNiveaux = niveaux.map((item, indice) => {
        return (
            <option key={indice}>
                {
                item.nom
            }</option>
        )
    })


   async function getSpecialite() {
        const datas = await axios.get('http://localhost:3100/specialite')
        if (datas.data !== null) {
            console.log(datas.data)
            setSpecialites(datas.data)

        }
    } 

    let displaySpecialite = specialites.map((item, indice) => {
        return (
            <option key={indice}>
                {
                item.nom
            }</option>
        )
    })

    return ( 

         <div className='mt-5'>
        <NavBarGestionNotes nom = "ESPACE D'INSCRIPTION ETUDIANT" />
        <div className='container' style={{
            marginTop: '50px',
          }}></div>
                <Container>

                    <content contentContainerStyle={
                        {
                            flexGrow: 1,
                            justifyContent: 'center'
                        }
                    }>

                        <Form className='inscription-form' align="center"
                            onSubmit={
                                (e) => {
                                    e.preventDefault()
                                    save()
                                }
                        }>
                           
                            <div className='form-content'>

                                <Button variant="ESPACE D'INSCRIPTION ETUDIANT" size="lg" active></Button>
                                {' '}

                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Prenom
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Prenom" required
                                            value={inputPrenom}
                                            onChange={
                                                (e) => setInputPrenom(e.target.value)
                                            }/>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Nom
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Nom" required
                                            value={inputNom}
                                            onChange={
                                                (e) => setInputNom(e.target.value)
                                            }/>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Email
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" placeholder="Email" required
                                            value={inputEmail}
                                            onChange={
                                                (e) => setInputEmail(e.target.value)
                                            }/>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Password
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="password" placeholder="password" required
                                            value={inputPassword}
                                            onChange={
                                                (e) => setInputPassword(e.target.value)
                                            }/>
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Matricule
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Matricule" readOnly
                                            value={inputMatricule}
                                            onChange={
                                                (e) => setInputMatricule(e.target.value)
                                            }/>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Niveau
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Select defaultValue="Choose..." placeholder="Niveau"
                                            value={inputNiveau}
                                            onChange={
                                                (e) => setInputNiveau(e.target.value)
                                        }>

                                            <option>Choix niveau</option>
                                            {displayNiveaux} </Form.Select>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Specialite
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Select defaultValue="Choose..." placeholder="Specialite"
                                            value={inputSpecialite}
                                            onChange={
                                                (e) => setInputSpecialite(e.target.value)
                                        }>
                                            <option>Choix specialité</option>
                                            {displaySpecialite} </Form.Select>
                                    </Col>
                                </Form.Group>


                                <Form.Group as={Row}
                                    className="mb-3"
                                    controlId="formHorizontalEmail">
                                    <Form.Label column
                                        sm={2}>
                                        Photo
                                    </Form.Label>

                                    <Col sm={10}>


                                        <div>
                                            <input class="form-control form-control-lg" id="formFileLg" type="file"
                                                value={inputImage}
                                                onChange={
                                                    (e) => setInputImage(e.target.value)
                                                }/>
                                            <label for="formFileLg" class="form-label"></label>
                                        </div>

                                    </Col>
                                </Form.Group>
                                <Container>
                                    <div className="message">
                                        {
                                        message ? <p>{message}</p> : null
                                    }</div>

                                    <Row>
                                        <Col sm={6}>

                                            <Button type="reset"
                                                onClick={
                                                    // () => setForm(" ")
                                                    reset
                                                }
                                                variant="secondary">
                                                Annuler</Button>
                                            {' '}&nbsp;
                                        </Col>
                                        <Col sm={4}>

                                            <Button type="submit" variant="success">S'inscrire</Button>
                                            {' '}&nbsp;
                                        </Col>
                                    </Row>


                                </Container>

                            </div>


                        </Form>

                    </content>

                </Container>

         </div>


    );
}

