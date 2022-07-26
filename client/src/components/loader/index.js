import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
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
        backgroundColor: theme.colors.primary.main,

        '& > h1':{
            fontFamily: theme.font.secondary
        }
    }
}))
export default function Loader() {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <div className={classes.loader}><h1>PhotosLibrary</h1></div>
    )
}