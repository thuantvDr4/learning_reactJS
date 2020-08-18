import { makeStyles } from '@material-ui/core/styles';
//color
import { blue, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },

    extendedIcon: {
        marginRight: theme.spacing(1),
    },

}));

export const floatingStyle = makeStyles((theme)=>({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
    },

    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },

}));
