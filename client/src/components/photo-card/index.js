import "./style.scss";
import {Link, NavLink, Route} from "react-router-dom";


export default function PhotoCard(props, index) {
    const data = props.data;

    const showAuthor = () => {
        let lastName = data.user.last_name || " ";
        return data.user.first_name + " "  + lastName;
    }

    return(
        <div className={"photo-card"} key={index}>
            <Link to={`photos/${props.data.id}`}>
                <p>{showAuthor()}</p>
                <img src={props.data.urls.regular} alt={showAuthor()}/>
            </Link>
        </div>
    )
}