import React, {useState} from 'react';
import { Input, Slider, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SliderWithInput = ({}) => {
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

    function handleInputChange (event) {
        setValue(event.target.value===''? '' : Number(event.target.value))
    }

    function handleBlur () {
        if (value < 0) {
            setValue(0);
        } else if (value > 100) {
            setValue(100);
        }
    }

    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Slider with input field  </Typography>
                {/**...*/}
                <Typography id="continuous-slider" > volume {value} </Typography>
                <Grid container spacing={2} alignItems="center" >
                    <Grid item>
                        <VolumeDown/>
                    </Grid>

                    <Grid item xs>
                        <Slider
                            // defaultValue={30}
                            value={typeof value === 'number' ? value : 0}
                            onChange={handleChange}
                            getAriaValueText={valueText}
                            aria-labelledby="input-slider"
                            valueLabelDisplay="auto"
                            color={'secondary'}
                        />
                    </Grid>

                    <Grid item>
                        <Input
                            className={classes.input}
                            value={value}
                            margin={'dense'}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>

            </div>
        </>
    );
}

export default SliderWithInput;
