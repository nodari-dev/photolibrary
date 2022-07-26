import {useLazyQuery} from "@apollo/client";
import {GET_PHOTO_DETAILS} from "../../hooks/get-photo-details";
import {useParams} from "react-router-dom";
import {PhotoContainer} from "../../containers";
import {showAuthor} from "../../features";
import {GET_SEARCH_PHOTOS} from "../../hooks/get-search-photos";
import useSearch from "../../hooks/use-search";
import {useEffect} from "react";
import {Loader, PhotoCard} from "../../components";
import {useGlobalThemeElements} from "../../theme/global-theme-elements";
import {useStyles} from "./styles";

export default function Photo() {
    const classes = useStyles();
    const elements = useGlobalThemeElements();
    let {photoId} = useParams();

    const {filters} = useSearch();
    const [getPhoto, {data: dataPhoto}] = useLazyQuery(GET_PHOTO_DETAILS);
    const [getSearch, {data: dataSearch}] = useLazyQuery(GET_SEARCH_PHOTOS);

    useEffect(() => {
        getPhotoDetails(photoId)
    }, [])

    const getPhotoDetails = (id) =>{
        getPhoto({
            variables: {
                photoId: id
            }
        }).then(res => getRelatedPhotos(res.data.photo.tags));
    }

    const getRelatedPhotos = (tags) => {
        if (tags.length === 0) return;

        getSearch({
            variables: {
                searchParams: {
                    keywords: tags.reduce(filters.filterTags, ""),
                    page: 1,
                }
            }
        });
    }

    if (dataPhoto) {
        return (
            <PhotoContainer>
                <div className={classes.singlePhoto}>
                    <div className={classes.content}>
                        <h4 className={classes.date}>Year {new Date(dataPhoto.photo.created_at).getFullYear()}</h4>
                        <h2 className={classes.title}>Photo
                            by {showAuthor(dataPhoto.photo.user.first_name, dataPhoto.photo.user.last_name)}</h2>
                        <div className={classes.description}>
                            {dataPhoto.photo.description && <p>{dataPhoto.photo.description}</p>}
                        </div>
                        <a className={elements.primaryButton} href={dataPhoto.photo.links.html} target={"_blank"}>Show
                            original</a>
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={dataPhoto.photo.urls.full} alt="Photo"/>
                    </div>
                    <div className={classes.blur}></div>
                </div>

                {
                    dataSearch && dataSearch?.searchPhotos.results.length !== 0 &&
                    <div className={classes.relatedPhotos}>
                        <h2>You may also like</h2>
                        <div className={classes.relatedList}>
                            {dataSearch?.searchPhotos?.results.map((photo, index) => (
                                <div className={classes.relatedItem} key={index} onClick={() =>{
                                    getPhotoDetails(photo.id)
                                }}>
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