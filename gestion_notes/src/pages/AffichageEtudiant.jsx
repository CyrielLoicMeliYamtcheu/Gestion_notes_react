import Table from 'react-bootstrap/Table'
import {
    Navbar,
    Form,
    Button,
    Nav,
    Col,
    Row
} from 'react-bootstrap'
import axios from 'axios'
import {useState, useEffect} from 'react'
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';


export default function AffichageEtudiant() {

    const [listeEtudiant, setListeEtudiant] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {

        getAllStudent()

    }, [])


    async function deleteStudent(etudiant) {

        let rep = window.confirm(`Etes-vous sûr de vouloir supprimer l'etudiant : ${
            etudiant.nom
        } ? `)
        if (rep === true) {
            const res = await axios.delete(`http://localhost:3100/etudiant/${
                etudiant._id
            }`)
            console.log("delete success")
            console.log(res)
            getAllStudent()
        }

    }


    async function getAllStudent() {

        await axios.get('http://localhost:3100/etudiant/').then((datas) => {

            console.log("matieres par modules ", datas)
            if (datas.data !== null) {
                const tmp = datas.data
                setListeEtudiant(tmp)

            }
        })
    }


    async function findStudent(search) {
        await axios.get('http://localhost:3100/search/', {
            params: {
                rech: search
            }
        }).then((datas) => {
            if (datas.data !== null) {
                console.log(datas.data)
                const tmp = datas.data
                setListeEtudiant(tmp)
            }

        })
    }


    let displayEtudiant = listeEtudiant.map((item, indice) => {

        return (
            <tbody key={indice}>
                <tr>
                    <td>{
                        item.matricule
                    }</td>
                    <td>{
                        item.prenom
                    }</td>
                    <td>{
                        item.nom
                    }</td>
                    <td>{
                        item.specialite
                    }</td>
                    <td>{
                        item.niveau.nom
                    }</td>
                    <td>
                        <Button variant="success" onClick= {() => deleteStudent(item)} as="input" type="submit" value="Supprimer" className="mt-5"/>{' '}&nbsp;
                    </td>
                </tr>
            </tbody>
        )

    })

    return (

        <div className='mt-5'>
            <NavBarGestionNotes nom="LISTE DES ETUDIANTS"/>
            <div className='container'
                style={
                    {marginTop: '50px'}
            }></div>

            <div>
                <Row>
                    <Col>
                        <Form.Control className={'form-control w-25'}

                            placeholder="search"
                            value={search}
                            onChange={
                                (e) => setSearch(e.target.value)
                            }/>

                    </Col>
                    <Col>
                        <Button variant="success" as="input"
                            onClick={
                                () => findStudent(search)
                            }
                            type="submit"
                            value="Search"/>{' '}&nbsp;

                    </Col>
                </Row>
            </div>


            <br></br>
            <div>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                            <th>Matricule</th>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Specialite</th>
                            <th>Niveau</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {displayEtudiant} </Table>

            </div>
        </div>

    )

}
