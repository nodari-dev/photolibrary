import {Link} from "react-router-dom";
import {makeStyles, useTheme} from "@mui/styles";

const useStyles = makeStyles((theme) =>({

    photoCard:{
        position: "relative",
        willChange: "auto",
        margin: 10,
        transition: theme.transitions.default,

        '&.fixed-size':{
            width: 500,
            height: 500,
        },

        '&.adaptive-size':{
            height: 500,
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
            objectFit: "cover",
        },


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


}))

export default function PhotoCard({data, interactive, fixedSize, additionalInfo, index}) {
    const theme = useTheme();
    const classes = useStyles(theme);
    return(
        <div className={`${classes.photoCard} ${interactive ? "interactive" : "default"} ${fixedSize ? "fixed-size" : "adaptive-size"}`} key={index}>
            <div className={`${classes.content}`}>
                <img src={data.urls.regular} alt="Photo"/>
            </div>
            {additionalInfo && <p>{data.date}</p> }
            <Link to={`/photos/${data.id}`} className={classes.link}/>
        </div>
    )
}