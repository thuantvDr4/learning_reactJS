import { makeStyles } from '@material-ui/core/styles';
//color
import { blue, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },


}));


export const customMark_style = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: 300,
        },
    },
    margin: {
        height: theme.spacing(3),
    },
    grid:{
        background: '#d500f9'
    }
}));

