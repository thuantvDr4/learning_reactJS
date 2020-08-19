import React, {useState} from 'react';
import {FormControl, FormLabel, FormControlLabel, Radio, RadioGroup  } from '@material-ui/core';
import {useStyles} from './styles';

//color
import { blue, green } from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';



const RadioLabelPlacement =({})=> {

    const classes = useStyles();

    const [value, setValue] = useState('top');

    const handleChange = (event) => {
        setValue(event.target.value);
        // alert(event.target.value)
    };


    return (
        <>
            <div className={classes.root}>
                <FormControl component="fieldset">
                    <FormLabel
                        color = 'primary'
                        component="legend"
                    >
                        labelPlacement
                    </FormLabel>

                    <RadioGroup aria-label="position"
                                name="position"
                                defaultValue="top"
                                value={value}
                                onChange={handleChange}>

                        <FormControlLabel
                            value="top"
                            control={<Radio color="primary" />}
                            label="Top"
                            labelPlacement="top"
                        />
                        <FormControlLabel
                            value="start"
                            control={<Radio color="primary" />}
                            label="Start"
                            labelPlacement="start"
                        />
                        <FormControlLabel
                            value="bottom"
                            control={<Radio color="primary" />}
                            label="Bottom"
                            labelPlacement="bottom"
                        />
                        <FormControlLabel
                            value="end"
                            control={<Radio color="primary" />}
                            label="End" />

                    </RadioGroup>
                </FormControl>
            </div>
        </>
    );
}

export default RadioLabelPlacement;
