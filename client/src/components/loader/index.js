import {useStyles} from "./styles";

export default function Loader() {
    const classes = useStyles();
    return (
        <div className={classes.loader}><h1>PhotosLibrary</h1></div>
    )
}