import { makeStyles } from '@material-ui/core/styles';
//color
import { blue, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(1),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },

}));


export const dialogStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },


}));

