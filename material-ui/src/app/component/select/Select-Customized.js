import React, {useState} from 'react';
import {FormControl, InputLabel, Select, Typography,
    FormHelperText, NativeSelect, InputBase, MenuItem } from '@material-ui/core';
import {useStyles} from './styles';
import { withStyles } from '@material-ui/core/styles';


const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);



const SelectCustomized = ({}) => {
    //
    const classes = useStyles();
    const [age, setAge] = React.useState('');


    const handleChange = (event) => {
        setAge(event.target.value);
    };


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Customized Select </Typography>
                {/**...*/}
                <FormControl className={classes.margin}>
                    <InputLabel color={'secondary'} htmlFor="demo-customized-textbox">Age</InputLabel>
                    <BootstrapInput id="demo-customized-textbox" />
                </FormControl>

                {/**......*/}
                <FormControl className={classes.margin}>
                    <InputLabel id="demo-customized-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                {/**.....*/}
                <FormControl className={classes.margin}>
                    <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                    <NativeSelect
                        id="demo-customized-select-native"
                        value={age}
                        onChange={handleChange}
                        input={<BootstrapInput />}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>


            </div>
        </>
    );
}

export default SelectCustomized;
