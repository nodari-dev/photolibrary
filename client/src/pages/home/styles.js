import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
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