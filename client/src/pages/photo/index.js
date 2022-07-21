import {useQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "../../hooks/get-photo-details";
import {useParams} from "react-router-dom";


export default function Photo(){
    let { photoId } = useParams();
    const {loading, error, data} = useQuery(GET_PHOTO_DETAILS, {
        variables: {photoId},
    });

    if (loading) return <h2>Loading...</h2>
    return(
        <>
            <img src={data?.photo.urls.regular} alt=""/>
        </>
    )
}