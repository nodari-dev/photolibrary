import "./style.scss";
import {Link} from "react-router-dom";
import {showAuthor} from "../../features";
import Image from "../image";


export default function PhotoCard({data, interactive, index}) {

    return(
        <div className={`photo-card ${interactive ? "interactive" : ""}`} key={index}>
            <div className="photo-card-content">
                <Image src={data.urls.regular} size={"small"}/>
                <p className={"photo-card-content-author"}>
                    {showAuthor(data.user.first_name, data.user.last_name)}
                </p>
                <p className={"photo-card-content-notify"}>Click to open</p>
            </div>
            <Link className={"photo-card-link"} to={`/photos/${data.id}`}/>
        </div>
    )
}