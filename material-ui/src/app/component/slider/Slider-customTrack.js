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
const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

//
const marks = [
    {
        value: 0,
    },
    {
        value: 20,
    },
    {
        value: 37,
    },
    {
        value: 100,
    },
];

//
const IOSSlider = withStyles({
    root: {
        color: '#3880ff',
        height: 2,
        padding: '15px 0',
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor:  '' ,
        boxShadow: iOSBoxShadow,
        marginTop: -14,
        marginLeft: -14,
        '&:focus, &:hover, &$active': {
            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
            },
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 12px)',
        top: -22,
        '& *': {
            background: 'transparent',
            color: '#000',
        },
    },
    track: {
        height: 2,
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: '#bfbfbf',
    },
    mark: {
        backgroundColor: '#bfbfbf',
        height: 8,
        width: 1,
        marginTop: -3,
    },
    markActive: {
        opacity: 1,
        backgroundColor: 'currentColor',
    },
})(Slider);



const PrettoSlider = withStyles({
    root: {
        color: '#f73378',
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
            boxShadow: 'inherit',
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 8,
        borderRadius: 4,
    },
    rail: {
        height: 8,
        borderRadius: 4,
    },
})(Slider);


const SliderCusTrack = ({}) => {
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
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Slider Customized Track  </Typography>
                {/**...*/}
                <Typography gutterBottom > volume {value} </Typography>
                <IOSSlider aria-label="ios slider" defaultValue={60} marks={marks} valueLabelDisplay="on" />

                <div className={classes.margin}/>
                <Typography gutterBottom>pretto.fr + {value} </Typography>
                <PrettoSlider
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-label="pretto slider"
                    defaultValue={20} />
            </div>
        </>
    );
}

export default SliderCusTrack;
