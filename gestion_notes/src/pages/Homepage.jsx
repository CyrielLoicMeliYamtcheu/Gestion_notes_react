import { Link } from 'react-router-dom';  
import NavBar from '../components/AppNavbar/NavBar';
import SideBar from '../components/SideBar';

export default function HomePage(){
    return (
      <div>
        <NavBar/>
        <h2>Homepage</h2>
      </div>
      
    );
}