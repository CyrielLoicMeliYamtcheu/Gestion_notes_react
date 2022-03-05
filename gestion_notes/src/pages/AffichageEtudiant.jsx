
import Table from 'react-bootstrap/Table'
import { Navbar, Form, Button, Nav, } from 'react-bootstrap'
 
export default function AffichageEtudiant(){
    return (
    <div>      
        <Table striped bordered hover responsive="sm">
  <thead>
    <tr>
      <th>Matricules</th>
      <th>Prénoms</th>
      <th>Noms</th>
      <th>Spécialité</th>
      <th>E-mail</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>EIT0012022</td>
      <td>Waly</td>
      <td>Ebongom</td>
      <td>Cybersécuritéclouding</td>
      <td>ebongomwaly@gmail.com</td>
    </tr>
    <tr>
      <td>EIT0022022</td>
      <td>Théophile</td>
      <td>Yantchou</td>
      <td>Cybersécuritéclouding</td>
      <td>@</td>
    </tr>
    <tr>
      <td>EIT0032022</td>
      <td>Cyriel</td>
      <td>Yamtcheu</td>
      <td>BigData</td>
      <td>@</td>
    </tr>
    <tr>
      <td>EIT0042022</td>
      <td>Lydie</td>
      <td>Douanla</td>
      <td>BigData</td>
      <td>@</td>
    </tr>
    <tr>
      <td>EIT0052022</td>
      <td>Pascal</td>
      <td>Minou</td>
      <td>Cybersécurité&clouding</td>
      <td>@</td>
    </tr>
  </tbody>
              
  
</Table>
    <div class="container my-4"> 
      <div class="border border-light p-3 mb-4">
 
 
 
        <div class="text-center">
          
            <Button variant="danger" as="input" type="button" value="Annuler" className="mt-5" />{' '}&nbsp;
 
            <Button variant="primary" as="input" type="button" value="Modifier" className="mt-5" />{' '}&nbsp;
                                          
            <Button variant="success" as="input" type="submit" value="Enregistrer" className="mt-5" />{' '}&nbsp;
        </div>
 
 
 
      </div>
         
    </div>
    </div>     
 
  )
}