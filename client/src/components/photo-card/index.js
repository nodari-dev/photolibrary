import {Link} from "react-router-dom";
import {useTheme} from "@mui/styles";
import {useStyles} from "./styles";

export default function PhotoCard({data, interactive, fixedSize, additionalInfo, index}) {
    const classes = useStyles();
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