
import {useQuery} from "@apollo/client";
import {GET_PHOTOS} from "../../hooks/get-photos";
import PhotoCard from "../../components/photo-card";
import Slider from "react-slick";
import {GalleryContainer} from "../../containers";
import {Loader} from "../../components";
import {useStyles} from "./styles";
import {HomeSlider} from "./components/slider";

export default function Home(){
    const classes = useStyles();
    const {loading, data} = useQuery(GET_PHOTOS);

    if (loading) return <Loader/>;
    return(
        <GalleryContainer>
            <div className={classes.sliderWrap}>
                <HomeSlider data={data} />
            </div>
        </GalleryContainer>

    )
}