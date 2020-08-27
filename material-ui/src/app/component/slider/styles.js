import { makeStyles } from '@material-ui/core/styles';
//color
import { blue, green } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme)=>({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: 300,
        },
    },

    input: {
        width: 42,
    },
    root_vertical:{
        height: 300,
    },
    slider:{
        color: '#ff9800' // custom track for slider,
    }

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
    slider_st:{
        height:20
    }
}));

