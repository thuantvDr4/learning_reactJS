import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CusTypography from './component/typography/index';
import CusButton from './component/button/index';
import ButtonIcon from './component/button/Button-icon';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});


function App() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CusTypography/>
          <CusButton/>
          <ButtonIcon/>
        </div>
    );
}

export default App;
