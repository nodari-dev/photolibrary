
import {useQuery} from "@apollo/client";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
import {GalleryContainer} from "../../containers";
import {Loader} from "../../components";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) =>({
    sliderWrap:{
         width: "100%",
         marginTop: theme.navigation.height,
     },

    slider:{

        '& .slick-track':{
            display: "flex",
            alignItems: "center",

            '& .slick-slide':{
                transition: theme.transitions.default,
                transform: "scale(0.85)",
                opacity: 0.6,
                cursor: "pointer",

                '& > *': {
                    pointerEvents: "none"
                },
                '&.slick-active':{
                    opacity: 1,
                    transform: "scale(1)",

                    '& > *': {
                        pointerEvents: "all"
                    },
                }
            }
        }
    }
}));

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