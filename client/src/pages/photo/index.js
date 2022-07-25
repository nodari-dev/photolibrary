// import "./style.scss";
import {useLazyQuery, useQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "../../hooks/get-photo-details";
import {Link, useParams} from "react-router-dom";
import {PhotoContainer} from "../../containers";
import {showAuthor} from "../../features";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";
import {useEffect} from "react";
import PhotoCard from "../../components/photo-card";
import {Loader} from "../../components";


export default function Photo() {
    let {photoId} = useParams();
    const {adapting} = useSearch();
    const [getPhoto, {data: dataPhoto, refetch}] = useLazyQuery(GET_PHOTO_DETAILS);
    const [getSearch, {data: dataSearch}] = useLazyQuery(GET_SEARCH_PHOTOS);

    useEffect(() => {
        getPhoto({
            variables: {
                photoId
            }
        }).then(res => getRelatedPhotos(res.data.photo));
    }, [])


    const getRelatedPhotos = (data) =>{
        if(data.tags.length === 0) return;

        getSearch({
            variables: {
                searchParams: {
                    keywords: adapting.adaptTagsArray(data.tags),
                    page: 1,
                }
            }
        });
    }

    if (dataPhoto) {
        return (
            <PhotoContainer>
                <div className="single-photo">
                    <div className={"single-photo-content"}>
                        <h4 className={"single-photo-content-date"}>Year {new Date(dataPhoto.photo.created_at).getFullYear()}</h4>
                        <h2 className={"single-photo-content-title"}>Photo
                            by {showAuthor(dataPhoto.photo.user.first_name, dataPhoto.photo.user.last_name)}</h2>
                        <div className={"single-photo-content-description"}>
                            {dataPhoto.photo.description && <p>{dataPhoto.photo.description}</p>}
                        </div>
                        <a className={"primary-button"} href={dataPhoto.photo.links.html} target={"_blank"}>Show
                            original</a>
                    </div>
                    <div className="image-container">
                        <img src={dataPhoto.photo.urls.full} alt="Photo"/>
                    </div>
                    <div className="single-photo-blur"></div>
                </div>

                {
                    dataPhoto?.photo.tags.length > 0 &&
                    <div className="related-photos">
                        <h2>You may also like</h2>
                        <div className="related-photos-list">
                            {dataSearch?.searchPhotos?.results.map((photo, index) => (
                                <div className="related-photos-list-el" key={index}>
                                    <PhotoCard data={photo} fixedSize={false}/>
                                </div>
                            ))}
                        </div>
                    </div>
                }
            </PhotoContainer>
        )
    } else {
        return <Loader/>
    }
}