import React, {useState} from 'react';
import { Input, Slider, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';
import { withStyles, makeStyles } from '@material-ui/core/styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


//
const marks = [
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
        value: 60,
        label: '60°C',
    },
    {
        value: 100,
        label: '100°C',
    },
];


const SliderVertical = ({}) => {
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


    //
    return (
        <>
            <div className={[classes.root_vertical,]}>
                {/**...title..*/}
                <Typography variant={'h5'}> Slider Vertical  </Typography>
                {/**...*/}
                <Typography id="vertical-slider" gutterBottom > Temperature {value} </Typography>
                <Slider
                    value={value}
                    onChange ={handleChange}
                    color ={'secondary'}
                    className={classes.slider}
                    orientation="vertical"
                    getAriaValueText={valueText}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    disabled
                    orientation="vertical"
                    getAriaValueText={valueText}
                    defaultValue={30}
                    aria-labelledby="vertical-slider"
                />
                <Slider
                    color = {'secondary'}
                    orientation="vertical"
                    defaultValue={[20, 37]}
                    aria-labelledby="vertical-slider"
                    getAriaValueText={valueText}
                    marks={marks}
                />
            </div>
        </>
    );
}

export default SliderVertical;
