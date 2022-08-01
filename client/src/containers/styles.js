import {makeStyles} from "@mui/styles";
import {theme} from "../theme/theme";

export const useStyles = makeStyles({
    mainWrapper: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
    },

    galleryContainer:{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    singlePhotoContainer:{
        width: "100%",
        minHeight: "100vh",
    },

    defaultContainer:{
        width: "100%",

        padding:`${theme.padding.default} ${theme.navigation.height}`,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    photosListContainer:{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: `${theme.margin.medium} 0`,

        "& > div":{
            flex: `1 1 calc(25% - ${theme.margin.default} * 2)`,
        }
    },


});