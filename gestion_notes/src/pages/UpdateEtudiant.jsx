import {
    Col,
    Container,
    Row,
    Navbar,
    Form,
    Button,
    Nav
} from 'react-bootstrap'
import {useNavigate, Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';

export default function UpdateEtudiant() {

    const navigate = useNavigate()
    const [etudiant, setEtudiant] = useState({})
    const [form, setForm] = useState({
        prenom: '',
        nom: '',
        email: '',
        password: '',
        matricule: '',
        niveau: '',
        specialite: '',
        notes:'',
        image:'',
        user:''
    })


    async function save() {
        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data?.role)
        if (data?.role === "Etudiant") {
        console.log("donnne form:", form)
        const datas = await axios.put('http://localhost:3100/etudiant/' + data.id, form)
        console.log(datas)
        let user = {id:data.id, nom:form.nom, prenom:form.prenom, email:form.email, role: data.role}
        sessionStorage.setItem('user', JSON.stringify(user));
        navigate('/')
        }
    }

    async function getInfosForOneTeacher() {

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log(data?.id)
        console.log(data?.nom)
        console.log(data?.prenom)
        console.log(data?.role)
        if (data.role === "Etudiant") {
            console.log("id", data.id)
            await axios.get('http://localhost:3100/onestudent/'+ data.id).then((datas) => {
                console.log("dddddddd",datas)
                if (datas.data !== null) {
                    setEtudiant(datas.data)
                    setForm(datas.data)
                }
            })

        }

    }

    useEffect(() => {
        getInfosForOneTeacher()
    }, [])


    return (
          <div className='mt-5'>
            <NavBarGestionNotes nom="MODIFICATIONS DES PARAMETRES DE L'ETUDIANT"/>
            <div className='container'
                style={
                    {marginTop: '50px'}
            }>
        <Row type="flex" justify="center" align="center">
            <Container>
                <content contentContainerStyle={
                    {
                        flexGrow: 1,
                        justifyContent: 'center'
                    }
                }>
                    <Form className='INSCRIPTION'

                        onSubmit={
                            (e) => {
                                e.preventDefault()
                                save()
                            }
                    }>
                        <h2>ESPACE DE MODIFICATION ETUDIANT</h2>
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
                                    <Form.Control type="prenom" placeholder="Prenom"

                                        value={
                                            form.prenom
                                        }
                                        onChange={
                                            (e) => {
                                                let tmp = {
                                                    ...form
                                                }
                                                tmp.prenom = e.target.value
                                                setForm(tmp)
                                            }
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
                                <Form.Control type="nom" placeholder="Nom"

                                    value={
                                        form.nom
                                    }
                                    onChange={
                                        (e) => {
                                            let tmp = {
                                                ...form
                                            }
                                            tmp.nom = e.target.value
                                            setForm(tmp)
                                        }
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
                            <Form.Control type="email" placeholder="Email"

                                value={
                                    form.email
                                }
                                onChange={
                                    (e) => {
                                        let tmp = {
                                            ...form
                                        }
                                        tmp.email = e.target.value
                                        setForm(tmp)
                                    }
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
                        <Form.Control type="matricule" placeholder="Matricule"
                        readOnly
                         value={
                                    form.matricule
                                }
                                onChange={
                                    (e) => {
                                        let tmp = {
                                            ...form
                                        }
                                        tmp.matricule = e.target.value
                                        setForm(tmp)
                                    }
                                }
                        />
                    </Col>
                </Form.Group>

                {/* <Form.Group as={Row}
                    className="mb-3"
                    controlId="formHorizontalEmail">
                    <Form.Label column
                        sm={2}>
                        Niveau
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control type="niveau" placeholder="Niveau"

                             value={
                                    form.niveau
                                }
                                onChange={
                                    (e) => {
                                        let tmp = {
                                            ...form
                                        }
                                        tmp.niveau = e.target.value
                                        setForm(tmp)
                                    }
                                }

                          />
                    </Col>
            </Form.Group> */}

            <Form.Group as={Row}
                className="mb-3"
                controlId="formHorizontalEmail">
                <Form.Label column
                    sm={2}>
                    Specialite
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="specialite" placeholder="Specialite"

                        value={
                            form.specialite
                        }
                        onChange={
                            (e) => {
                                let tmp = {
                                    ...form
                                }
                                tmp.specialite = e.target.value
                                setForm(tmp)
                            }
                        }/>
                </Col>
        </Form.Group>

        {/* <Form.Group as={Row}
            className="mb-3"
            controlId="formHorizontalEmail">
            <Form.Label column
                sm={2}>
                Charger votre photo
            </Form.Label>

            <Col sm={10}>
                <div>
                    <input class="form-control form-control-lg" id="formFileLg" type="file"
                       ></input>
                <label for="formFileLg" class="form-label"></label>
            </div>

        </Col>
    </Form.Group> */}

    <Button as="input" type="button" value="Annuler" type="reset"
        onClick={
            () => setForm({
                ...etudiant
            })
        }/>{' '}&nbsp;

    <span className="float-end">
        <Button as="input" type="submit" variant = "secondary" value="modifier"/>{' '}&nbsp;
        <Button as={Link}
            to="/"
            variant="outline-secondary">
            Retour
        </Button>
    </span>
</div></Form></content></Container>
</Row>
</div>
</div>

    );
}
