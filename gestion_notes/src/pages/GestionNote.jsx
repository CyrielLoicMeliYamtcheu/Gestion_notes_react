import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';
import {Form, Button, Table} from 'react-bootstrap'
import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function GestionNote() {

    const [field, setField] = useState([])
    const [notes, setNotes] = useState([])
    const [message, setMessage] = useState("")
    const [course, setCourse] = useState([])
    const [infosTeacher, setInfosTeacher] = useState({})
    const [specialite, setSpecialites] = useState([])
    const [listeEtudiant, setListeEtudiant] = useState([])
    const [special, setSpecial] = useState("")
    const [matieres, setMatieres] = useState("")
    const [note, setNote] = useState("")
    const [newNote, setNewNote] = useState();
    const [indiceActuel, setIndiceActuel] = useState()


    const navigate = useNavigate()

    useEffect(() => {

        getCourseForTeacher()


    }, [])

    async function getCourseForTeacher() {

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        if (data.role === "Enseignant") {
            console.log(data.id)
            console.log(data.nom)
            console.log(data.prenom)
            console.log(data.role)
            // 6218c00812faa2772c5a1dec
            await axios.get('http://localhost:3100/enseignant/' + data.id).then((datas) => {
                console.log(datas.data)
                if (datas.data !== null) {
                    console.log("donnees : ", datas.data.matiere);
                    const tempMatiere = datas.data.matiere;
                    setCourse(tempMatiere);
                    tempMatiere.map(async item => {
                        const date = await item.specialite
                        setSpecialites(date)
                    })
                }
            })
        }
    }

    console.log("taille liste specialite", specialite)

    let displaySpecialite = specialite.map((item, indice) => {
        return (
            <option key={indice}>
                {
                item.nom
            }</option>
        )
    })


    let displayCourse = course.map((item2, indice2) => {
        return (
            <option key={indice2}>
                {
                item2.intitule
            }</option>
        )
    })


    // async function getInfosForOneTeacher() {
    //     const datas = await axios.get('http://localhost:3100/authcheckerEns')
    //     console.log(datas.data)
    //     console.log(datas.Enseignant)
    //     console.log(datas.Enseignant.email)
    //     if (datas.data !== null)
    //         setInfosTeacher(datas.Enseignant.email)
    // }


    async function getEtudiantByNiveauSpecialite() {

        await axios.get('http://localhost:3100/etudiants/', {
            params: {
                specialite: special
            }
        }).then((datas) => {
            if (datas !== null) {
                console.log("liste etudiants ", datas.data)
                setListeEtudiant(datas.data)
            }
        })
    }


    async function saveNotes(id, data) {

        await axios.put('http://localhost:3100/notes/' + id, data).then((datas) => {

            console.log(datas)
        })
    }


    const handleInputChange = (indice) => {
        console.log({listeEtudiant})
        console.log({indice})

        alert(matieres)

        const tempNote = {
            matiere: matieres,
            note: newNote
        };

        tempNote.matiere = matieres
        console.log("matieres", tempNote.matiere)
        let currentEtudient = listeEtudiant[indice];
        currentEtudient.notes.push(tempNote);
        console.log("id : ", currentEtudient._id)
        console.log({currentEtudient})

        // TODO: update la liste des etudiants
        console.log({listeEtudiant})

        saveNotes(currentEtudient._id, tempNote)


    };


    let displayEtudiant = listeEtudiant.map((item, indice) => {
        return (
            <tr key={
                indice + 1
            }>
                <th scope="row">
                    {
                    indice + 1
                }</th>
                <td>{
                    item.matricule
                }</td>
                <td>{
                    item.nom
                }</td>
                <td>{
                    item.prenom
                }</td>
                <td>

                    <Form.Control className={'form-control w-25'}

                        name="note"
                        disabled={
                            indiceActuel === indice ? false : true
                        }
                        onChange={
                            (e) => setNewNote(e.target.value)
                        }/>


                    <Button type="button"
                        onClick={
                            () => handleInputChange(indice)
                        }
                        className="btn btn-primary">
                        Enregistrer
                    </Button>

                </td>
                <td>
                    <Button type="button" className="btn btn-primary"
                        onClick={
                            () => setIndiceActuel(indice)
                    }>Modifier</Button>
                </td>
            </tr>
        )

    })

    // async function save_note() {

    //     let res = await axios.post('http://localhost:3100/note/',)
    //     console.log(res)
    //     if (res.status === 201) {

    //         setMessage("User created successfully");
    //         navigate('/login')
    //     } else {

    //         setMessage("Some error occured");
    //     }

    // }


    return (
        <div className='mt-5'>
            <NavBarGestionNotes nom="GESTION DES NOTES"/>
            <div className='container'
                style={
                    {marginTop: '50px'}
            }>
                <Form className='mt-4'>
                    <div className="row">
                        <div className="form-group col-5">
                            <Form.Label>Matière</Form.Label>
                            <Form.Select className="form-control"
                                value={matieres}
                                onChange={
                                    (e) => setMatieres(e.target.value)
                            }>
                                <option>
                                    Choix Matieres</option>
                                {displayCourse} </Form.Select>

                        </div>
                        <div className="form-group col-5">
                            <Form.Label>Filière</Form.Label>
                            <Form.Select className="form-control"
                                value={special}
                                onChange={
                                    (e) => setSpecial(e.target.value)
                            }>
                                <option>
                                    Choix Filieres</option>
                                {displaySpecialite} </Form.Select>
                        </div>

                        <Button onClick={getEtudiantByNiveauSpecialite}
                            className="btn btn-info col-2 h-50"
                            style={
                                {marginTop: '22px'}
                        }>Afficher liste des eleves</Button>

                    </div>

                </Form>
                <Table className="table table-hover table-bordered"
                    style={
                        {marginTop: '22px'}
                    }
                    id="myTable">
                    <thead className='table-primary'>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Matricule</th>
                            <th scope="col">Nom</th>
                            <th scope="col">Prenom</th>
                            <th scope="col">Notes</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody> {displayEtudiant} </tbody>
                </Table>


                <Button type="submit"
                    onClick={
                        navigate('/')
                    }
                    className="btn btn-success w-100">Enregistrer</Button>
            </div>
        </div>
    );
}
