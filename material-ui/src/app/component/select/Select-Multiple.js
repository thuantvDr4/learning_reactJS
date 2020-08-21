import React, {useState} from 'react';
import clsx from 'clsx';
import {FormControl, InputLabel, Select, Typography,
    FormHelperText, Input, InputBase, MenuItem, Checkbox, ListItemText, Chip } from '@material-ui/core';
import {useStyles} from './styles';
import { withStyles, useTheme  } from '@material-ui/core/styles';



//
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

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

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


const SelectMultiple = ({}) => {
    //
    const classes = useStyles();
    const theme = useTheme();
    //
    const [personName, setPersonName] = React.useState([]);

    //
    const handleChange = (event) => {
        setPersonName(event.target.value);
    };


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Multiple Select </Typography>

                {/**...*/}
                <FormControl className={classes.formControl}>
                    <InputLabel color={'secondary'} id="demo-mutiple-name-label">Name</InputLabel>
                    <Select
                        labelId="demo-mutiple-name-label"
                        id="demo-mutiple-name"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input />}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/**..tag....*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-mutiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-mutiple-checkbox-label"
                        id="demo-mutiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name}>
                                <Checkbox checked={personName.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {/**...Chip...*/}
                <FormControl className={classes.formControl}>
                    <InputLabel color={'secondary'} id="demo-mutiple-chip-label">Chip</InputLabel>
                    <Select
                        color={'secondary'}
                        labelId="demo-mutiple-chip-label"
                        id="demo-mutiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={(selected) => (
                            <div className={classes.chips}>
                                {selected.map((value) => (
                                    <Chip key={value} label={value} className={classes.chip} />
                                ))}
                            </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {names.map((name) => (
                            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>


            </div>
        </>
    );
}

export default SelectMultiple;
