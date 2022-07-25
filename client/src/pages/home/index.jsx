
import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
import {GalleryLayout} from "../../layouts";


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
            <div className={"slider-flex"}>
                <Slider {...settings}>
                    {data?.homePhotos?.map((photo, index) => (
                        <PhotoCard data={photo} interactive={true} key={index}/>
                    ))}
                </Slider>
            </div>
        </GalleryLayout>

    )
}