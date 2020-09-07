import React, {useState} from 'react';
import { Switch, Slider, Grid, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


const SwitchBasic = ({}) => {
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
                <Typography variant={'h5'}> Switch Basic </Typography>
                {/**...*/}
                <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Switch
                    checked={state.checkedB}
                    onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Switch disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
                <Switch disabled checked inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />

            </div>
        </>
    );
}

export default SwitchBasic;
