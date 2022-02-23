import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Homepage'
import Login from './pages/Login'
import InscriptionEtudiant from './pages/InscriptionEtudiant'
import GestionNote from './pages/GestionNote';



ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gerer-notes" element={<GestionNote />} />
            <Route path="/inscriptionEt" element={<InscriptionEtudiant />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
