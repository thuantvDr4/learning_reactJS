import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme)=>({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    button_style: {
        color: 'green',
        backgroundColor:'pink',
    },
    iconStyle: {
        color:'green',

    }
}));
