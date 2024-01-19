import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <nav>
                <Link to="/"><button>Home</button></Link>
                <Link to="/planets"><button>Planets</button></Link>
                <Link to="/rockets"><button>Rockets</button></Link>   
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;