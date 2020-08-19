import { makeStyles } from '@material-ui/core/styles';
//color
import { blue, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },

    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },

    formControl: {
        margin: theme.spacing(3),
    },

}));

