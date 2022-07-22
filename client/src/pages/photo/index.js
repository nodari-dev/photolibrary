import "./style.scss";
import {useQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "../../hooks/get-photo-details";
import {useParams} from "react-router-dom";
import DefaultLayout from "../../containers/default-layout";
import {showAuthor} from "../../features";
import Image from "../../components/image";

export default function Photo(){
    let { photoId } = useParams();
    const {loading, error, data} = useQuery(GET_PHOTO_DETAILS, {
        variables: {photoId},
    });

    if (loading) return <h2>Loading...</h2>
    return(
        <DefaultLayout>
            <div className="single-photo">
                <h2 className={"single-photo-title"}>Photo by {showAuthor(data.photo.user.first_name, data.photo.user.last_name)} in {new Date(data.photo.created_at).getFullYear()}</h2>
                <div className={"single-photo-description"}>
                    {data.photo.description && <p>{data.photo.description}</p>}
                    <p>Likes: <strong>{data.photo.likes}</strong></p>
                    <p>Download me <a className={"primary-link"} href={data.photo.links.html} target={"_blank"}>right now</a></p>
                </div>
                <Image src={data.photo.urls.regular} small={false}/>
            </div>
        </DefaultLayout>
    )
}