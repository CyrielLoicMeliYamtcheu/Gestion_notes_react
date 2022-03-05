import { Link } from 'react-router-dom';  

export default function SideBar(){
    return (
        <div className="main-sidebar">
            <aside id="sidebar-wrapper">
            <div className="sidebar-brand">
                <a href="index.html">Stisla</a>
            </div>
            <div className="sidebar-brand sidebar-brand-sm">
                <a href="index.html">St</a>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <Link className="nav-link" to="/">
                        <i className="fas fa-pencil-ruler"></i>
                        <span>Accueil</span>
                    </Link>  
                </li>
                <li className="menu-header">Dashboard</li>
                
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link has-dropdown"><i className="fas fa-fire"></i><span>Accueil</span></a>
                    <ul className="dropdown-menu">
                    <li><a className="nav-link" href="index-0.html">General Dashboard</a></li>
                    <li><a className="nav-link" href="index.html">Ecommerce Dashboard</a></li>
                    </ul>
                </li>
                </ul>
            </aside>
        </div>

    );
}
