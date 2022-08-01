import {useStyles} from "./styles";
import {PhotoCard} from "../components";

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

export function PhotosListContainer (props){
    const classes = useStyles();

        return(
            <div className={classes.photosListContainer}>
                {props.children}
            </div>
        )
}
