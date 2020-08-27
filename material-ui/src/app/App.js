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
import RadioBasic from './component/radio/Radio-Basic';
import RadioLabelPlacement from './component/radio/Radio-LabelPlacement';
import RadioShowError from './component/radio/Radio-ShowError';
import RadioCustomized from './component/radio/Radio-Customized';
import SelectSimple from './component/select/Select-Simple';
import SelectNative from './component/select/Select-Native';
import SelectCustomized from './component/select/Select-Customized';
import SelectMultiple from './component/select/Select-Multiple';
import SelectWithDialog from './component/select/SelectWithDialog';
import SelectGrouping from './component/select/Select-Grouping';
import SliderBasic from './component/slider/Slider-basic';
import SliderDiscrete from './component/slider/Slider-discrete';
import SliderCusMark from './component/slider/Slider-customMark';
import SliderWithInput from './component/slider/Slider_input';
import SliderCusTrack from './component/slider/Slider-customTrack';
import SliderVertical from './component/slider/Slider-vertical';


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

                <RadioBasic/>
                <RadioLabelPlacement/>
                <RadioShowError/>
                <RadioCustomized/>

                <SelectSimple/>
                <SelectNative/>
                <SelectCustomized/>
                <SelectMultiple/>
                <SelectWithDialog/>
                <SelectGrouping/>

                <SliderBasic/>
                <SliderDiscrete/>
                <SliderCusMark/>
                <SliderWithInput/>
                <SliderCusTrack/>
                <SliderVertical/>

            </div>
    );
}

export default App;
