import { Link, NavLink } from "react-router-dom";
import '../css/navbar.css'
const Navbar = () => {
    return (
        <nav class="navbar">
            <div>
                <div class="logo">
                    <a href="#">FlexiFit</a>
                </div>
            </div>
            <ul className="ULLinks">
                <li className="links">
                    <Link to='/'>Home</Link>
                </li>
                <li className="links" >
                    <NavLink to='/about'>About</NavLink>
                </li>
                <li className="links">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>


    )
}
export default Navbar;