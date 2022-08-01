
import PhotoCard from "../../../components/photo-card";
import Slider from "react-slick";
import {useStyles} from "../styles";

export const HomeSlider = ({data}) => {
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
    return (
        <Slider {...settings} className={classes.slider}>
            {data?.homePhotos?.map((photo, index) => (
                <PhotoCard data={photo} interactive={true} fixedSize={true} key={index}/>
            ))}
        </Slider>
    )
}
