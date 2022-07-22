import {Link, NavLink} from "react-router-dom";

export default function Header(){

    return(
        <div className={"container default-layout"}>
            <header className={"header"}>
                <nav className="navigation">
                    <NavLink className={"primary-link"} activeClassName={"active"} to={"/"}>Index</NavLink>
                    <Link to={"/"}><h6 className={"logo"}>PhotosLibrary</h6></Link>
                    <NavLink className={"primary-link"} to={"/search/"}>Search</NavLink>
                </nav>
            </header>
        </div>
    )
}