import React, {useState} from 'react';
import {FormControl, InputLabel, Select, Slider, Grid, Typography,} from '@material-ui/core';
import {customMark_style as useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SliderCusMark = ({}) => {
    //
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    /*
    * handleChange
    * */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function valueText(value) {
        return `${value}°C`;
    }

    const cusMark = [
        {
            value: 0,
            label: '0°C',
        },
        {
            value: 20,
            label: '20°C',
        },
        {
            value: 37,
            label: '37°C',
        },
        {
            value: 100,
            label: '100°C',
        },
    ];


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Slider Custom Mark </Typography>
                {/**...*/}
                <Typography id="continuous-slider" > Temperature {value} </Typography>
                <Slider
                    // defaultValue={30}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valueText}
                    aria-labelledby="discrete-slider-custom"
                    valueLabelDisplay="auto"
                    marks ={cusMark}
                    step={10}
                    color={'secondary'}
                />

                {/**.....*/}
                <Typography id="continuous-slider"  style={{marginTop: '50px'}}> Label always visible </Typography>
                <Slider
                    // defaultValue={30}
                    style={{marginTop: '30px'}}
                    value={value}
                    onChange={handleChange}
                    getAriaValueText={valueText}
                    aria-labelledby="discrete-slider-custom"
                    valueLabelDisplay="on"
                    marks ={cusMark}
                    step={10}
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
                    aria-labelledby="discrete-slider-custom"
                    valueLabelDisplay="auto"
                    marks ={cusMark}
                    step={10}
                    color={'secondary'}
                />

            </div>
        </>
    );
}

export default SliderCusMark;
