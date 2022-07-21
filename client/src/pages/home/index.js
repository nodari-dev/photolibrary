
import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";

export default function Home(){
    const {loading, error, data} = useQuery(GET_PHOTOS);

    if (loading) return <h2>Loading</h2>
    return(
        <>
            {data?.homePhotos?.map((photo, index) => (
                    <PhotoCard data={photo} key={index}/>
            ))}
        </>

    )
}