import {Link} from "react-router-dom";
import {makeStyles} from "@mui/styles";
import {theme} from "../../theme/theme";

const useStyles = makeStyles({

    photoCard:{
        position: "relative",
        willChange: "auto",
        flex: "1 1 160px",
        margin: 10,
        transition: theme.transitions.default,

        '&.fixed-size':{
            width: 500,
            height: 500,
        },

        '&.adaptive-size':{
            width: "100%",
            height: 500,
        },

        '&.interactive': {

            '& $notify':{
                opacity: 1
            }

        },

        '&.default': {
            '&:hover':{
                transform: "scale(.95)",
            }
        },
    },

    content:{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        position: "relative",


        '& > img':{
            width: "100%",
            height: "100%",
            position: "absolute",
            top:0,
            left:0,
            objectFit: "cover"
        }
    },

    link:{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        margin: "0 auto",
        zIndex: 10
    },

    notify:{
        transition: theme.transitions.default,
        opacity: 0,
    },

})

export default function PhotoCard({data, interactive, fixedSize, index}) {
    const classes = useStyles();
    return(
        <div className={`${classes.photoCard} ${interactive ? "interactive" : "default"} ${fixedSize ? "fixed-size" : "adaptive-size"}`} key={index}>
            <div className={`${classes.content}`}>
                <img src={data.urls.regular} alt="Photo"/>
            </div>

            <Link to={`/photos/${data.id}`} className={classes.link}/>
        </div>
    )
}