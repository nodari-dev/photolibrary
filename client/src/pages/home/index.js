
import {useQuery} from "@apollo/client";
import {GET_PHOTOS} from "../../hooks/get-photos";
import {GalleryContainer} from "../../containers";
import {Loader} from "../../components";
import {useStyles} from "./styles";
import {HomeSlider} from "./components/home-slider";
import {useEffect} from "react";

export default function Home(){
    const classes = useStyles();
    const {loading, data} = useQuery(GET_PHOTOS);

    useEffect(()=>{
        console.log(data)
    }, [])

    if (loading) return <Loader/>;
    return(
        <GalleryContainer>
            <div className={classes.sliderWrap}>
                <HomeSlider data={data} />
            </div>
        </GalleryContainer>

    )
}