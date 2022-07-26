import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "15vh"
    },
    title:{
        textAlign: "center",
        margin: `${theme.margin.medium} 0`,
    },

    form: {
        width: 550,
        display: "flex",
        justifyContent: "center",
        border: `2px solid ${theme.colors.secondary.main}`,
        borderRadius: theme.shape.radius,
        padding: "5px"
    },

    searchInput:{
        width: 500,
        minHeight: 40,
        borderTopLeftRadius: theme.shape.radius,
        borderBottomLeftRadius: theme.shape.radius,
        padding: `0 ${theme.margin.default}`,
        backgroundColor: theme.colors.secondary.main,
        fontFamily: theme.font.primary,
        fontWeight: theme.font.weight.regular
    },

    searchButton:{
        width: 50,
        minHeight: 40,
        cursor: "pointer",
        backgroundColor: theme.colors.primary.main,
        borderTopRightRadius: theme.shape.radius,
        borderBottomRightRadius: theme.shape.radius,

        '& svg':{
            fill: theme.colors.secondary.main
        }
    },

    results: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        margin: `${theme.margin.medium} 0`,


    },

    resultsItem: {
        flex: `1 1 calc(25% - ${theme.margin.default} * 2)`,
        transition: theme.transitions.default,

        '&:hover':{
            transform: 'scale(0.95)',
        }
    },

    pagination:{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    paginationAction: {
        margin: `0 ${theme.margin.default}`,
        cursor: "pointer",
        opacity: 0.8,
        transition: theme.transitions.default,
        fontWeight: theme.font.weight.bold,

        '&:hover':{
            opacity: 1,
        }
    }
}))