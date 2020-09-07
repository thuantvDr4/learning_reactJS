import React, {useState} from 'react';
import { Switch, FormGroup, FormControlLabel, FormControl, FormLabel,Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SwitchFormGroup = ({}) => {
    //
    const classes = useStyles();
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: true,
    });

    /*
    * handleChange
    * */
    const handleChange = (event, newValue) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };


    //
    return (
        <>
            <div className={classes.root} style={{marginTop: 50}}>
                {/**...title..*/}
                <Typography variant={'h5'}> Switches with FormGroup
                </Typography>
                {/**...*/}
                <FormControl>
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.jason} onChange={handleChange} name="jason" />}
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={<Switch checked={state.antoine} onChange={handleChange} name="antoine" />}
                            label="Antoine Llorca"
                        />
                    </FormGroup>

                </FormControl>

            </div>
        </>
    );
}

export default SwitchFormGroup;
