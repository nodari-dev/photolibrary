
import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
// import {data} from "../../mocked-data";
import GalleryLayout from "../../containers/gallery-layout";


export default function Home(){

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        variableWidth: true,
        centerPadding: "40px",
        slidesToShow: 1,
        focusOnSelect: true

    };

    const {loading, error, data} = useQuery(GET_PHOTOS);

    if (loading) return <h2>Loading</h2>
    return(
        <GalleryLayout>
            <Slider {...settings}>
            {data?.homePhotos?.map((photo, index) => (
                <PhotoCard data={photo} key={index}/>
            ))}
            </Slider>
        </GalleryLayout>

    )
}