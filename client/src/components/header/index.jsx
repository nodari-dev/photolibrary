import {Link, NavLink} from "react-router-dom";
import {makeStyles, useTheme} from "@mui/styles";
import {useGlobalThemeElements} from "../../theme/global-theme-elements";

const useStyles = makeStyles((theme) =>({
    header:{
        width: "100%",
        top:0,
        left:0,
        position: "absolute",
        padding: `0 ${theme.padding.default}`,
        zIndex: 2,
    },

    navigation:{
        width: "100%",
        height: theme.navigation.height,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },

    navLogo:{
        fontFamily: theme.font.secondary,
        color: theme.colors.secondary.main
    }

}))
export default function Header(){
    const theme = useTheme();
    const classes = useStyles(theme);
    const elements = useGlobalThemeElements(theme);

    return(
            <header className={classes.header}>
                <nav className={classes.navigation}>
                    <NavLink className={elements.primaryLink} activeClassName={"active"} to={"/"}>Index</NavLink>
                    <Link to={"/"}><h6 className={classes.navLogo}>PhotosLibrary</h6></Link>
                    <NavLink className={elements.primaryLink} to={"/search/"}>Search</NavLink>
                </nav>
            </header>
    )
}