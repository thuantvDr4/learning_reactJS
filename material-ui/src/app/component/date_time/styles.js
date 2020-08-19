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

