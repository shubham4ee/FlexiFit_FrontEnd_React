import { Link, NavLink } from "react-router-dom";
// import '../css/navbar.css'
import '../css/gymlist.css'
import gym1 from "../images/gym1.jpg"
import gym2 from "../images/gym2.jpg"
import gym3 from "../images/gym3.jpg"
const Navbar = () => {
    return (
        <div>

            <div className="search-container">
                <div>
                    <div class="search-text">
                        <h2>Search by</h2>
                    </div>
                </div>
                <ul className="filterlist">
                    <li className="filter">
                        <h3>city</h3>
                        <textarea></textarea>
                    </li>

                    <li className="filter">
                        <h3>sortby price</h3>
                        <textarea></textarea>
                    </li>
                    <li className="filter">
                        <h3>bycity</h3>
                        <textarea></textarea>
                    </li>
                </ul>


            </div>
            <div className="gym-container">
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} src={gym1} /></Link>
                    <h3 className="gym-title">Gym & fitness 1</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} src={gym2} /></Link>
                    <h3 className="gym-title">Gym & fitness 2</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} src={gym3} /></Link>
                    <h3 className="gym-title">Gym & fitness 3</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} src={gym1} /></Link>
                    <h3 className="gym-title">Gym & fitness 4</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} src={gym3} /></Link>
                    <h3 className="gym-title">Gym & fitness 5</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>
                <div className="gym-item">
                    <Link className="Link-img"><img height={200} width={250} /></Link>
                    <h3 className="gym-title">Gym & fitness 6</h3>
                    <p> gym description, available items faciliteies etc</p>

                </div>

            </div>
        </div>


    )
}
export default Navbar;