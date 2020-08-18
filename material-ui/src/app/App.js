import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CusTypography from './component/typography/index';
import ButtonNormal from './component/button/Button-normal';
import ButtonIcon from './component/button/Button-icon';
import ButtonGroup from './component/button/Button-group';
import CheckBoxBasic from './component/checkBox/CheckBox-basic';
import CheckBoxIcon from './component/checkBox/CheckBox-icon';

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

            <ButtonNormal/>
            <ButtonIcon/>
            <ButtonGroup/>

            <CheckBoxBasic/>
            <CheckBoxIcon/>

        </div>
    );
}

export default App;
