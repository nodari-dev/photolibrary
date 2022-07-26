import {createStyles, makeStyles} from '@material-ui/core';
import {theme} from "./theme";

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            body: {
                height: '100%',
                width: '100%',
                backgroundColor: theme.colors.primary.main,
                color: theme.colors.secondary.main,
                fontFamily: theme.font.primary,
                lineHeight: theme.font.lineHeight.desktop.auto,
                fontSize: theme.font.sizes.desktop.paragraph
            },

            "h1,h2,h3,h4,h5,h6":{
                margin: "5px 0",
                fontWeight: theme.font.weight.bold,
            },

            h1:{
                fontSize: theme.font.sizes.desktop.h1
            },
            h2:{
                fontSize: theme.font.sizes.desktop.h2
            },
            h3:{
                fontSize: theme.font.sizes.desktop.h3
            },
            h4:{
                fontSize: theme.font.sizes.desktop.h4
            },
            h5:{
                fontSize: theme.font.sizes.desktop.h5
            },
            h6:{
                fontSize: theme.font.sizes.desktop.h6
            },
        }
    })
);

const GlobalStyles = () => {
    useStyles();

    return null;
};

export default GlobalStyles;