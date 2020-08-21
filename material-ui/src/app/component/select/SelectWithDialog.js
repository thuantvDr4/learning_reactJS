import React, {useState} from 'react';
import clsx from 'clsx';
import {FormControl, InputLabel, Select, Typography, Button,
        Input, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import {dialogStyles as useStyles} from './styles';
import { withStyles, useTheme  } from '@material-ui/core/styles';


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


const SelectWithDialog = ({}) => {
    //
    const classes = useStyles();
    const theme = useTheme();
    //
    const [open, setOpen] = React.useState(false);
    const [age, setAge] = React.useState('');

    //
    const handleClickOpen = () => {
        setOpen(true);
    };
    //
    const handleClose = () => {
        setOpen(false);
    };
    //
    const handleChange = (event) => {
        setAge(Number(event.target.value) || '');
    };

    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Select with Dialog </Typography>

                {/**...*/}
                <Button variant ={'contained'} onClick={handleClickOpen}>Open select dialog</Button>

                {/**..Dialog....*/}
                <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose}>
                    <DialogTitle>Fill the form</DialogTitle>
                    <DialogContent>
                        <form className={classes.container}>
                            {/**......*/}
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
                                <Select
                                    native
                                    value={age}
                                    onChange={handleChange}
                                    input={<Input id="demo-dialog-native" />}
                                >
                                    <option aria-label="None" value="" />
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Select>
                            </FormControl>

                            {/**......*/}
                            <FormControl className={classes.formControl}>
                                <InputLabel id="demo-dialog-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-dialog-select-label"
                                    id="demo-dialog-select"
                                    value={age}
                                    onChange={handleChange}
                                    input={<Input />}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="secondary">
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </>
    );
}

export default SelectWithDialog;
