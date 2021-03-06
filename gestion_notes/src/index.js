import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Homepage'
import Login from './pages/Login'
import InscriptionEtudiant from './pages/InscriptionEtudiant'
import InscriptionEnseignant from './pages/InscriptionEnseignant'
import Footer from './components/AppFooter/Footer'
import GestionNote from './pages/GestionNote'
import {Container, Row, Col} from 'react-bootstrap'
import Etudiant from './pages/Etudiant';
import NavBar from './components/AppNavbar/NavBar';
import AffichageEtudiant from './pages/AffichageEtudiant'
import UpdateEtudiant from './pages/UpdateEtudiant'


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <NavBar/> 
      <Container>
        <Row>
          <Col>
            <Routes> 
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
               <Route path="/inscriptionEn" element={<InscriptionEnseignant />} />
                <Route path="/inscriptionEt" element={<InscriptionEtudiant />} />
                 <Route path="/gerer-notes" element={<GestionNote />} />
                  <Route path="/liste-etudiant" element={<AffichageEtudiant />} /> 
                  <Route path="/update-etudiant" element={<UpdateEtudiant />} />      
                 <Route path="/etudiant" element={<Etudiant />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
