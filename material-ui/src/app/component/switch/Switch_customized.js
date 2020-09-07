import React, {useState} from 'react';
import {Switch, FormGroup, FormControlLabel, Grid, FormLabel, Typography,} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


// PurpleSwitch
const PurpleSwitch = withStyles({
    switchBase: {
        color: blue[300],
        '&$checked': {
            color: blue[500],
        },
        '&$checked + $track': {
            backgroundColor: blue[500],
        },
    },
    checked: {},
    track: {},
})(Switch);


// IOSSwitch
const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({classes, ...props}) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});


// AntSwitch
const AntSwitch = withStyles((theme) => ({
    root: {
        width: 40,
        height: 20,
        padding: 2,
        display: 'flex',
    },
    switchBase: {
        padding:4,
        color: theme.palette.grey[500],
        '&$checked': {
            transform: 'translateX(18px)',
            color: theme.palette.common.white,
            '& + $track': {
                opacity: 1,
                backgroundColor: theme.palette.secondary.main,
                borderColor: theme.palette.secondary.main,
            },
        },
    },
    thumb: {
        width: 12,
        height: 12,
        boxShadow: 'none',
    },
    track: {
        border: `1px solid ${theme.palette.grey[500]}`,
        borderRadius: 18 / 2,
        opacity: 1,
        backgroundColor: theme.palette.common.white,
    },
    checked: {},
}))(Switch);

const SwitchCustomized = ({}) => {
    //
    const classes = useStyles();
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
        checkedC: true,
    });

    /*
    * handleChange
    * */
    const handleChange = (event, newValue) => {
        setState({...state, [event.target.name]: event.target.checked});
    };


    //
    return (
        <>
            <div className={classes.root} style={{}}>
                {/**...title..*/}
                <Typography variant={'h5'}> Customized switches
                </Typography>
                {/**...*/}
                <FormGroup>
                    <FormControlLabel
                        control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA"/>}
                        label="Custom color"
                    />
                    <FormControlLabel
                        control={<IOSSwitch checked={state.checkedB} onChange={handleChange} name="checkedB"/>}
                        label="iOS style"
                    />

                    <Typography component={'div'}>
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item> Off </Grid>
                            <Grid item >
                                <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
                            </Grid>
                            <Grid item>On</Grid>
                        </Grid>
                    </Typography>
                </FormGroup>
            </div>
        </>
    );
}

export default SwitchCustomized;
