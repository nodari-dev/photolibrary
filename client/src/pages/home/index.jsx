
import {useQuery} from "@apollo/client";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
import {GalleryContainer} from "../../containers";
import {Loader} from "../../components";
import {useStyles} from "./styles";

export default function Home(){
    const classes = useStyles();

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        focusOnSelect: true

    };

    const {loading, data} = useQuery(GET_PHOTOS);

    if (loading) return <Loader/>
    return(
        <GalleryContainer>
            <div className={classes.sliderWrap}>
                <Slider {...settings} className={classes.slider}>
                    {data?.homePhotos?.map((photo, index) => (
                        <PhotoCard data={photo} interactive={true} fixedSize={true} key={index}/>
                    ))}
                </Slider>
            </div>
        </GalleryContainer>

    )
}