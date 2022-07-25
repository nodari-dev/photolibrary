import {makeStyles} from "@mui/styles";
import {theme} from "../theme/theme";

const useStyles = makeStyles({
    mainWrapper: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: theme.colors.primary
    },

    galleryContainer:{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    defaultContainer:{
        width: "100%",

        marginTop: theme.header_height,
        padding:`0 ${theme.default_padding}`,
        minHeight: `calc(100vh - ${theme.header_height}`,
    },

    photoContainer: {
        width: "100%",
        minHeight: "100vh",
    }
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
        <div className={classes.photoContainer}>
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