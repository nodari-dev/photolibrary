import {makeStyles} from "@mui/styles";
import {theme} from "../../theme/theme";

const useStyles = makeStyles({
    loader: {
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        transition: theme.transitions.default,

        '& > h1':{
            fontFamily: theme.font.secondary
        }
    }
})
export default function Loader() {
    const classes = useStyles();
    return (
        <div className={classes.loader}><h1>PhotosLibrary</h1></div>
    )
}