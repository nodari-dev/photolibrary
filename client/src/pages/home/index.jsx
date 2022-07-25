
import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
import {GalleryContainer} from "../../containers";
import {Loader} from "../../components";
import {makeStyles} from "@mui/styles";
import {theme} from "../../theme/theme";


const useStyles = makeStyles({
     homeSlider:{
         width: "100%",
         marginTop: theme.header_height,
     }
})

export default function Home(){
    const classes = useStyles();

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

    if (loading) return <Loader/>
    return(
        <GalleryContainer>
            <div className={classes.homeSlider}>
                <Slider {...settings}>
                    {data?.homePhotos?.map((photo, index) => (
                        <PhotoCard data={photo} interactive={true} fixedSize={true} key={index}/>
                    ))}
                </Slider>
            </div>
        </GalleryContainer>

    )
}