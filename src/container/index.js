import { Link, redirect } from "react-router-dom";
import "./navbar.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MenuItems = [
    {
        title: "International",
        url: "/international",
        cName: "nav-links",
    },{
        title: "National",
        url: "/national",
        cName: "nav-links",
    },{
        title: "Science & Technology",
        url: "/science",
        cName: "nav-links",
    },{
        title: "Sports",
        url: "/sports",
        cName: "nav-links",
    },{
        title: "Entertainment",
        url: "/entertainment",
        cName: "nav-links",
    },
]

const NavBar = (props) => {

    const navigate = useNavigate();

    const {searchValue, setSearchValue} = props;
    const [clicked, setClicked] = useState(true);

    const handleSearchButton = () => {
        if(searchValue === ""){
            return;
        }

        navigate(`./search/${searchValue}`);
    }

    return (
        <nav className="NavbarItems">
            <div className="logo">
                <h1>DAILY NEWS</h1>
            </div>

            <div className="menu-icons" onClick={() => setClicked(!clicked)}>
                <i className={clicked ? "fas fa-bars" : "fas fa-times"}></i>
            </div>
            <ul className={!clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => {
                    return <li key={index}>
                        <Link className={item.cName} to={item.url}>{item.title}</Link>
                    </li>
                })}
                <li className="nav-search">
                    <input value={searchValue} placeholder="Search..." onChange={(event) => setSearchValue(event.target.value)}></input>
                    <button onClick={handleSearchButton}>Search</button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;