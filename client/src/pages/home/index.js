
import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {GET_PHOTOS} from "../../hooks/get-photos";
import {Link} from "@reach/router";

export default function Home(){
    const {loading, error, data} = useQuery(GET_PHOTOS);

    if (loading) return <h2>Loading</h2>
    return(
        <Fragment>
            {data?.homePhotos?.map((photo, index) =>(
                <div key={index}>
                    <Link to={`photos/${photo.id}`}>
                        <img src={photo.urls.regular} alt=""/>
                    </Link>
                </div>
            ))}
        </Fragment>
    )
}