import {makeStyles, useTheme} from "@mui/styles";
import {theme} from "../theme/theme";

const useStyles = makeStyles({
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
});

export function MainWrapper (props) {
    const classes = useStyles();

    return(
        <div className={classes.mainWrapper}>
            {props.children}
        </div>
    )
}

export function DefaultContainer (props) {
    const classes = useStyles();

    return(
        <div className={classes.defaultContainer}>
                {props.children}
        </div>
    )
}

export function PhotoContainer(props){
    const classes = useStyles();

    return(
        <div className={classes.singlePhotoContainer}>
            {props.children}
        </div>
    )
}

export function GalleryContainer (props){
    const classes = useStyles();

    return(
        <div className={classes.galleryContainer}>
            {props.children}
        </div>
    )
}