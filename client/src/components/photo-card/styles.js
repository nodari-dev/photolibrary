import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) =>({

    photoCard:{
        position: "relative",
        willChange: "auto",
        margin: 10,
        transition: theme.transitions.default,

        '&:hover':{
            transform: "scale(.95)",
        },

        '&.fixed-size':{
            width: 500,
            height: 500,
        },

        '&.adaptive-size':{
            height: 500,
        },


    },

    content:{
        width: "100%",
        height: "100%",
        cursor: "pointer",
        position: "relative",


        '& > img':{
            width: "100%",
            height: "100%",
            position: "absolute",
            top:0,
            left:0,
            objectFit: "cover",
        },


    },

    link:{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        margin: "0 auto",
        zIndex: 10
    },


}));