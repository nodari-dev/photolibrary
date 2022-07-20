import {useQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "../../hooks/get-photo-details";


export default function Photo({photoId}){
    const {loading, error, data} = useQuery(GET_PHOTO_DETAILS, {
        variables: {photoId},
    });

    if (loading) return <h2>Loading...</h2>
    return(
        <img src={data?.photo.urls.regular} alt=""/>
    )
}