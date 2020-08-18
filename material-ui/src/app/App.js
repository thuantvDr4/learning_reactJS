import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CusTypography from './component/typography/index';
import ButtonNormal from './component/button/Button-normal';
import ButtonIcon from './component/button/Button-icon';
import ButtonGroup from './component/button/Button-group';
import CheckBoxBasic from './component/checkBox/CheckBox-basic';
import CheckBoxIcon from './component/checkBox/CheckBox-icon';
import FloatingBasic from './component/floating/Floating-Basic';
import FloatingWithAnimation from './component/floating/Floating-animation';
import DateTimePicker from './component/date_time/Date-time-picker';


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

                <FloatingBasic/>
                <FloatingWithAnimation/>

                <DateTimePicker/>

            </div>
    );
}

export default App;
