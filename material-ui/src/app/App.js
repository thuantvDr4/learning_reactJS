import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CusTypography from './component/typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },
});


function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CusTypography/>
        </div>
    );
}

export default App;
