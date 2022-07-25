import {theme} from "./theme";
import {makeStyles} from "@mui/styles";

export const useThemeElements = makeStyles({

    primaryLink:{
        color: theme.colors.secondary,
        opacity: 0.8,
        transition: theme.transitions.default,

        '&:hover':{
            opacity: 1,
        },

        '&::after':{
            content: "",
            display: "block",
            marginTop: 1,
            width: 0,
            height: 1,
            paddingTop:1,
            backgroundColor: theme.colors.secondary,
            transition: theme.transitions.default,
        },

        '&.active':{
            opacity: 1,

            '&::after':{
                width: "100%",
            }
        }
    },

    primaryButton:{
        padding: 10,
        backgroundColor: theme.colors.secondary,
        textTransform: "uppercase",
        fontWeight: theme.font.weight.bold,
        color: theme.colors.primary,
        margin: "15px 0",
    },
});