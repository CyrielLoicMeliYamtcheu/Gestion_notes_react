import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap'
import HomePage from './pages/Homepage'
import Login from './pages/Login'
import InscriptionEtudiant from './pages/InscriptionEtudiant'
import InscriptionEnseignant from './pages/InscriptionEnseignant'
import Footer from './components/AppFooter/Footer'
import {logo} from './loic.png'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Router>
     
      <Container>
        <Row>
          <Col>
            <Routes>
               
               <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
               <Route path="/inscriptionEn" element={<InscriptionEnseignant />} />
                <Route path="/inscriptionEt" element={<InscriptionEtudiant />} />
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
