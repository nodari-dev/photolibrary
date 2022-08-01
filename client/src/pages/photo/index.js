import {useParams} from "react-router-dom";
import {PhotoContainer, PhotosListContainer} from "../../containers";
import {showAuthor} from "../../features";
import useSearch from "../../hooks/use-search";
import {useEffect} from "react";
import {Loader,} from "../../components";
import {useGlobalThemeElements} from "../../theme/global-theme-elements";
import {useStyles} from "./styles";
import usePhoto from "../../hooks/use-photo";
import {RelatedResults} from "./components/related-results";

export default function Photo() {
    const classes = useStyles();
    const elements = useGlobalThemeElements();

    let {photoId} = useParams();

    const {searchFilters, searchData, searchActions} = useSearch();
    const {photoActions, photoData} = usePhoto();

    useEffect(() => {
        /**
         * After getting photoID get photo data
         * It also with switching between photos (change photoID param => get new photo)
         */
        photoActions.getPhoto(photoId);
    }, [photoId])

    useEffect(() =>{
        /**
         * If data is update get related photos
         */

        if(photoData && photoData.photo.tags.length !== 0){
            let test = photoData?.photo.tags.reduce(searchFilters.filterTags, "");
            searchActions.getSearch(test,1);
        }
    }, [photoData])

    if (photoData) {
        return (
            <PhotoContainer>
                <div className={classes.singlePhoto}>
                    <div className={classes.content}>
                        <h4 className={classes.date}>Year {new Date(photoData.photo.created_at).getFullYear()}</h4>
                        <h2 className={classes.title}>Photo
                            by {showAuthor(photoData.photo.user.first_name, photoData.photo.user.last_name)}</h2>
                        <div className={classes.description}>
                            {photoData.photo.description && <p>{photoData.photo.description}</p>}
                        </div>
                        <a className={elements.primaryButton} href={photoData.photo.links.html} target={"_blank"}>Show
                            original</a>
                    </div>
                    <div className={classes.imageContainer}>
                        <img src={photoData.photo.urls.full} alt="Photo"/>
                    </div>
                    <div className={classes.blur}></div>
                </div>

                {
                    searchData &&
                    searchData?.searchPhotos.results.length !== 0 &&
                    <div className={classes.relatedPhotos}>
                        <h2>You may also like</h2>
                        <PhotosListContainer>
                            <RelatedResults list={searchData?.searchPhotos.results}/>
                        </PhotosListContainer>
                    </div>
                }
            </PhotoContainer>
        )
    } else {
        return <Loader/>
    }
}