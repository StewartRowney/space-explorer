import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default NavBar;