import "./index.scss";
import {Route, Link, NavLink} from "react-router-dom";

export default function Header(){

    return(
        <header className={"header"}>
            <nav className="navigation">
                <div className={"navigation-main"}>
                    <NavLink className={"primary-link"} activeClassName={"active"} to={"/"}>Index</NavLink>
                    <NavLink className={"primary-link"} to={"/search/"}>Search</NavLink>
                </div>
                <Link to={"/"}><h2 className={"logo"}>PhotosLibrary</h2></Link>
                <a className={"primary-link"} href="https://github.com/nodari-dev/photolibrary" target={"_blank"}>GitHub</a>
            </nav>
        </header>
    )
}