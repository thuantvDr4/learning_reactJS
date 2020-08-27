import React, {useState} from 'react';
import {FormControl, InputLabel, Select, Slider, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SliderBasic = ({}) => {
    //
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    /*
    * handleChange
    * */
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Basic Slider </Typography>
                {/**...*/}
                <Typography id="continuous-slider" > Volume {value}</Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <VolumeDown />
                    </Grid>

                    <Grid item xs>
                        <Slider  value={value} onChange={handleChange} color={'secondary'} aria-labelledby="continuous-slider" />
                    </Grid>

                    <Grid item>
                        <VolumeUp />
                    </Grid>
                </Grid>
                {/**...*/}
                <Typography color={'secondary'} id="disabled-slider" gutterBottom>
                    Disabled slider
                </Typography>
                {/**...read only..*/}
                <Slider  disabled defaultValue={30} aria-labelledby="disabled-slider" />

            </div>
        </>
    );
}

export default SliderBasic;
