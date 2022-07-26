import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) =>({
    singlePhoto: {
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    content: {
        width: "50%",
        textAlign: "center",
        marginTop: theme.navigation.height,
        zIndex: 2,
    },

    title: {
        margin: `${theme.margin.default} 0`,
    },

    date: {
        color: theme.colors.secondary.opacity
    },

    description: {
        margin: "40px 0",

        '& > p': {
            margin: "5px 0"
        }
    },

    imageContainer: {
        width: "100%",
        height: "100vh",
        position: "absolute",
        zIndex: 0,

        '& > img': {
            width: "100%",
            height: "100%",
            position: "absolute",
            objectFit: "cover",
        }
    },

    blur: {
        width: "100%",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        margin: "auto",
        zIndex: 1,
        background: theme.colors.primary.opacity,
        boxShadow: `inset 0px 4px 250px 100px ${theme.colors.primary.main}`,
    },

    relatedPhotos: {
        width: "100%",
        position: "relative",
        backgroundColor: theme.colors.primary.main,
        padding: theme.padding.default,
        textAlign: "center",
        zIndex: 4,
    },

    relatedList:{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: `${theme.margin.default} 0`,
    },

    relatedItem:{
        flex: `1 1 calc(25% - ${theme.margin.default} * 2)`
    }


}));