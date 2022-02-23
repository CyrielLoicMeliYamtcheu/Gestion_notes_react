import { Link } from 'react-router-dom';  
import NavBarGestionNotes from '../components/AppNavbar/NavBarGestionNotes';

export default function GestionNote(){
    return (
      <div>
        <NavBarGestionNotes/>
        <div className='container' style={{
            marginTop: '50px',
          }}>
          <form className='mt-4'>
            <div className="row">
                <div className="form-group col-5">
                  <label for="exampleFormControlSelect1">Matiere</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Matiere 1</option>
                    <option>Matiere 2</option>
                    <option>Matiere 3</option>
                    <option>Matiere 4</option>
                    <option>Matiere 5</option>
                  </select>
                </div>
                <div className="form-group col-5">
                  <label for="exampleFormControlSelect1">Filere</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Filere 1</option>
                    <option>Filere 2</option>
                    <option>Filere 3</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-info col-2 h-50 " style={{marginTop:'22px'}}>Charger la liste des eleves</button>
            </div>
           
          </form>
          <table className="table table-hover table-bordered" style={{marginTop:'22px'}} >
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
                <td><input type={'number'} name={'note'}  className={'form-control w-25'}/></td>
                <td>
                  <button type="button" className="btn btn-primary">Modifier</button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><input type={'number'} name={'note'}  className={'form-control w-25'}/></td>
                <td>
                  <button type="button" className="btn btn-primary">Modifier</button>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td><input type={'number'} name={'note'}  className={'form-control w-25'}/></td>
                <td>
                  <button type="button" className="btn btn-primary">Modifier</button>
                </td>
              </tr>
            </tbody>
          </table>
        <button type="button" className="btn btn-success w-100">Enregistrer</button>
        </div>
      </div>
    );
}