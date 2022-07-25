import {Link, NavLink} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {theme} from "../../theme/theme";
import {useThemeElements} from "../../theme/theme-elements";

export default function Header(){

    const useStyles = makeStyles({
        header:{
            width: "100%",
            top:0,
            left:0,
            position: "absolute",
            padding: `0 ${theme.default_padding}`,
            zIndex: 2,
        },

        navigation:{
            width: "100%",
            height: theme.header_height,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },

        navLogo:{
            fontFamily: theme.font.secondary,
            color: theme.colors.secondary
        }

    })

    const classes = useStyles();
    const elements = useThemeElements();
    return(
            <header className={classes.header}>
                <nav className={classes.navigation}>
                    <NavLink className={elements.primaryLink} activeClassName={"active"} to={"/"}>Index</NavLink>
                    <Link to={"/"}><h4 className={classes.navLogo}>PhotosLibrary</h4></Link>
                    <NavLink className={elements.primaryLink} to={"/search/"}>Search</NavLink>
                </nav>
            </header>
    )
}