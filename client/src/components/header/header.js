import {Link, NavLink} from "react-router-dom";
import {useGlobalThemeElements} from "../../theme/global-theme-elements";
import {useStyles} from "./styles";

export default function Header(){
    const classes = useStyles();
    const elements = useGlobalThemeElements();

    return(
        <p>123</p>
            // <header className={classes.header}>
            //     <nav className={classes.navigation}>
            //         <NavLink className={({ isActive }) => elements.primaryLink + (isActive ? " active" : "")}
            //                  to={"/"}>Index</NavLink>
            //         <Link to={"/"}><h6 className={classes.navLogo}>PhotosLibrary</h6></Link>
            //         <NavLink className={({ isActive }) => elements.primaryLink + (isActive ? " active" : "")}
            //                  to={"/search/"}>Search</NavLink>
            //     </nav>
            // </header>
    )
}