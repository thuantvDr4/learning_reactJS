import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme)=>({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },

    checkBox_st: {
        // color:'blue',
    }
}));
