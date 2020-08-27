import React, {useState} from 'react';
import {FormControl, InputLabel, Select, Slider, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SliderDiscrete = ({}) => {
    //
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    /*
    * handleChange
    * */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valueText() {
        return ` ${value}°C`;
    }


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Discrete Sliders </Typography>
                {/**...*/}
                <Typography id="continuous-slider" > Temperature {value} </Typography>
                <Slider
                    // defaultValue={30}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valueText}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    marks
                    step={10}
                    min={10}
                    max={110}
                    color={'secondary'}
                    />

                {/**...*/}
                <Typography id="discrete-slider" gutterBottom>
                    Disabled
                </Typography>
                {/**...read only..*/}
                <Slider
                    // defaultValue={30}
                    disabled
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valueText}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    marks
                    step={10}
                    min={10}
                    max={110}
                    color={'secondary'}
                />

            </div>
        </>
    );
}

export default SliderDiscrete;
