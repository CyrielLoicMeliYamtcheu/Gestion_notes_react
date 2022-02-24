import { Link } from 'react-router-dom';  
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';
import { Form, Button, Table } from 'react-bootstrap'

export default function GestionNote(){

  
    return (
      <div className='mt-5'>
        <NavBarGestionNotes />
        <div className='container' style={{
            marginTop: '50px',
          }}>
          <Form className='mt-4'>
            <div className="row">
                <div className="form-group col-5">
                  <Form.Label>Matière</Form.Label>
                  <Form.Select className="form-control">
                    <option>Matiere 1</option>
                    <option>Matiere 2</option>
                    <option>Matiere 3</option>
                    <option>Matiere 4</option>
                    <option>Matiere 5</option>
                  </Form.Select>
                </div>
                <div className="form-group col-5">
                  <Form.Label>Filière</Form.Label>
                  <Form.Select className="form-control">
                    <option>Filiere 1</option>
                    <option>Filiere 2</option>
                    <option>Filiere 3</option>
                  </Form.Select>
                </div>
                
                <Button type="submit" className="btn btn-info col-2 h-50" style={{marginTop:'22px'}}>Afficher liste des eleves</Button>
               
            </div>
           
          </Form>
          <Table className="table table-hover table-bordered" style={{marginTop:'22px'}} >
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
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Form.Control type="number" className={'form-control w-25'} />
                </td>
                <td>
                  <Button type="button" className="btn btn-primary">Modifier</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>

                <td>
                  <Form.Control type="number" className={'form-control w-25'} />
                </td>
               
                <td>
                  <Button type="button" className="btn btn-primary">Modifier</Button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                 <Form.Control type="number" className={'form-control w-25'} />
                </td>
                <td>
                  <Button type="button" className="btn btn-primary">Modifier</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        <Button type="submit" className="btn btn-success w-100">Enregistrer</Button>
        </div>
      </div>
    );
}