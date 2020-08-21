import React, {useState} from 'react';
import clsx from 'clsx';
import {
    FormControl, InputLabel, Select, Typography,
    MenuItem, ListSubheader,
} from '@material-ui/core';
import {dialogStyles as useStyles} from './styles';
import {withStyles, useTheme} from '@material-ui/core/styles';


//
const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


const SelectGrouping = ({}) => {
    //
    const classes = useStyles();
    const theme = useTheme();

    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Grouping Select </Typography>

                {/**...*/}
                <FormControl className={classes.formControl}>
                    <InputLabel color={'secondary'} htmlFor="grouped-native-select">Grouping-Native</InputLabel>
                    <Select native defaultValue="" id="grouped-native-select">
                        <option aria-label="None" value=""/>
                        <optgroup label="Category 1">
                            <option value={1}>Option 1</option>
                            <option value={2}>Option 2</option>
                        </optgroup>
                        <optgroup label="Category 2">
                            <option value={3}>Option 3</option>
                            <option value={4}>Option 4</option>
                        </optgroup>
                    </Select>
                </FormControl>

                {/**........*/}
                <FormControl className={classes.formControl}>
                    <InputLabel color={'secondary'} htmlFor="grouped-select">Grouping</InputLabel>
                    <Select defaultValue="" id="grouped-select">
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <ListSubheader>Category 1</ListSubheader>
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <ListSubheader>Category 2</ListSubheader>
                        <MenuItem value={3}>Option 3</MenuItem>
                        <MenuItem value={4}>Option 4</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </>
    );
}

export default SelectGrouping;
