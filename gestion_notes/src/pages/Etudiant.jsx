import NavBar from '../components/AppNavbar/NavBar';
import {Form, Button, Table} from 'react-bootstrap'
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';
import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Etudiant() {


    const [etudiant, setEtudiant] = useState([])
    const [course, setCourse] = useState([])
    const [notes, setNotes] = useState([])
    const [module, setModule] = useState([])
    const [modules, setModules] = useState([])
    const [coursebymodule, setCourseByModule] = useState([])
    const [teacher, setTeacher] = useState([])


    async function getCourse(specialite) {
        const datas = await axios.get('http://localhost:3100/matieres/', {
            params: {
                specialite: specialite
            }
        })

        if (datas.data !== null) { // get course
            console.log("MATIERE : ", datas.data)
            const tmp = datas.data
            setCourse(tmp)

            tmp.map(async item => {
                const date = await item.modules
                setModule(date)
            })

        }

    }


    useEffect(() => {

        getInfos()
        getModule()
        
    }, [])

    async function getModule() {
        await axios.get('http://localhost:3100/module').then((datas) => {
            if (datas.data !== null) {
                console.log("les modules sont : ", datas.data)
                const tmpo = datas.data
                setModules(tmpo)
                tmpo.map(async item => {
                    const data = await item.nom
                    console.log("item : ", data)

                    let donne = await getCourseByModule(data)
                    console.log("DONNEEE ", donne)
                })
            }
        })
    }

    async function getCourseByModule(modul) {

        await axios.get('http://localhost:3100/courses/', {
            params: {
                modules: modul
            }
        }).then((datas) => {

            console.log("matieres par modules ", datas)
            if (datas.data !== null) {
                const tmp = datas.data
                setCourseByModule(prev => prev.concat(tmp))
            }
        })
    }

    async function getTeacherByCourse(intitule) {

        await axios.get('http://localhost:3100/enseignantcourse/', {
            params: {
                intitule: intitule
            }
        }).then((datas) => {

            console.log("teacher by course ", datas)
            if (datas.data !== null) {
                const tmp = datas.data
                console.log("teacher by course2 ", datas.data[0].nom)
                setTeacher(tmp[0].nom)

            }

        })


    }


    async function getInfos() {

        let data = sessionStorage.getItem('user');
        data = JSON.parse(data)
        console.log(data)
        console.log("id etudiant ", data.id)
        console.log("nom etudiant ", data.nom)
        console.log("prenom etudiant ", data.prenom)
        console.log("role ", data.role)
        if (data.role === "Etudiant") {
            console.log("je suis étudiant")

        // 621d5a37e135bfbfd52681fa
        await axios.get('http://localhost:3100/etudiant/'+ data.id).then((datas) => {

            console.log("Etudiant ", datas)
            if (datas.data !== null) {
                console.log("Etudiant2 ", datas.data[0].nom)
                const tmp = datas.data
                setEtudiant(tmp)
                getCourse(tmp[0].specialite)

                tmp.map(async item => {
                    const date = await item.notes
                    setNotes(date)
                })
            }
        })

    }
  }


    function statusNote(note) {
        if (note >= "10" & note < "12") 
            return "passable"
         else if (note >= "12" & note < "14") 
            return "assez bien"
         else if (note >= "14" & note < "16") 
            return "bien"
         else if (note >= "16" & note < "18") 
            return "très bien"
         else if (note >= "18" & note < "20") 
            return "Excellent"
         else 
            return "faible"
        
    }


    let displayCoursebyModule = coursebymodule.map((item, indice) => {
        let d = getTeacherByCourse(item.intitule)
        console.log("valeur", d)
        let newNote = notes.map(value => value.matiere === item.intitule ? value.note : null)
        let status = statusNote(newNote)
        return (

            <tbody key={indice}>
                <tr>
                    <th scope="col" colSpan="6" className="table-success">
                        {
                        modules[indice].nom
                    }</th>
                </tr>

                <tr>
                    <th scope="col">
                        {
                        item.nom
                    }</th>
                    <th scope="col">
                        {
                        item.intitule
                    }</th>
                    <th scope="col">
                        {newNote}</th>
                    <th scope="col">
                        {
                        item.coef
                    }</th>
                    <th scope="col">
                        {status}</th>
                    <th scope="col">
                        {teacher}</th>
                </tr>

            </tbody>

        )

    })


    let displayEtudiant = etudiant.map((item, indice) => {

        return (

            <div key={indice}>
                <div>
                    <strong>NOM :
                    </strong>
                    {
                    item.nom
                } </div>
                <div>
                    <strong>PRENOM  :
                    </strong>
                    {
                    item.prenom
                } </div>
                <div>
                    <strong>NIVEAU :
                    </strong>
                    {
                    item.niveau.nom
                } </div>
                <div>
                    <strong>SPECIALITE :
                    </strong>
                    {
                    item.specialite
                } </div>
                <div>
                    <strong>MATRICULE :
                    </strong>
                    {
                    item.matricule
                } </div>
            </div>
        )
    })

    return (
        <div classNameName='mt-5'>
            <div className="bg-white">
                <div className="container">
                    <div className="row"
                        style={
                            {marginTop: '10%'}
                    }>
                        <div className="col-4">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="ui-w-70 rounded-circle"/><br></br>
                        </div>

                        <div className="col-8"
                            style={
                                {marginTop: '6%'}
                        }>
                            <div className="card my-4">
                                <div className="card-body">


                                    {displayEtudiant} </div>
                            </div>
                        </div>

                    </div>
                    <div className="text-center py-5">


                        <div className="text-muted mb-4"></div>
                    </div>
                    <div className="text-center">
                        <table className="table table-striped">
                            <thead>
                                <tr className="table-primary" className="table-primary">
                                    <th scope="col">Code module</th>
                                    <th scope="col">Nom de la matière</th>
                                    <th scope="col">Notes</th>
                                    <th scope="col">Coefficient</th>
                                    <th scope="col">Appréciation</th>
                                    <th scope="col">Nom du professeur</th>
                                </tr>
                            </thead>

                            {displayCoursebyModule}

                            <tbody>
                                <tr>
                                    <th scope="col" colSpan="6" className="table-success">block-A Appréhender son environnement et son métier</th>
                                </tr>
                                <tr>
                                    <th scope="col">4AS854</th>
                                    <th scope="col">Angular JS</th>
                                    <th scope="col">10.5</th>
                                    <th scope="col">2</th>
                                    <th scope="col">passable</th>
                                    <th scope="col">M. Pierre thomas</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}
