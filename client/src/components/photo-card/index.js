import "./style.scss";
import {Link, NavLink, Route} from "react-router-dom";


export default function PhotoCard(props, index) {
    const data = props.data;

    const showDate = () => {
        const date = new Date(data.created_at);
        return date.getFullYear();
    }

    const showAuthor = () => {
        let lastName = data.user.last_name || " ";
        return data.user.first_name + " "  + lastName;
    }

    return(
        <div className={"photo-card"} key={index}>
            <Link to={`photos/${data.id}`}>
                <div className="photo-card-content">
                    <p className={"photo-author"}>{showAuthor()}</p>
                    <div className="image-container">
                        <img src={data.urls.regular} alt={showAuthor()}/>
                    </div>
                    <p className={"photo-data"}>{showDate()}</p>
                </div>
            </Link>
        </div>
    )
}