import React, {useState} from 'react';
import { Switch, FormGroup, FormControlLabel, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SwitchFormLabel = ({}) => {
    //
    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
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
            <div className={classes.root} style={{marginTop: 100}}>
                {/**...title..*/}
                <Typography variant={'h5'}> Switch with FormControlLabel
                </Typography>
                {/**...*/}
               <FormGroup row >
                   <FormControlLabel
                       control={<Switch checked={state.checkedA} onChange={handleChange} name= 'checkedA'/>}
                       label={'Secondary'}
                   />

                   <FormControlLabel
                       control={
                           <Switch
                               checked={state.checkedB}
                               onChange={handleChange}
                               name="checkedB"
                               color="primary"
                           />
                       }
                       label="Primary"
                   />

                   <FormControlLabel control={<Switch />} label="Uncontrolled" />
                   <FormControlLabel disabled control={<Switch />} label="Disabled" />
                   <FormControlLabel disabled control={<Switch checked />} label="Disabled" />

               </FormGroup>

            </div>
        </>
    );
}

export default SwitchFormLabel;
