import {makeStyles} from "@mui/styles";
import {theme} from "../../theme/theme";
export const useStyles = makeStyles(() =>({
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