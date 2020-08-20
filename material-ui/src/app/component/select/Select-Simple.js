import React, {useState} from 'react';
import {FormControl, InputLabel, Select, MenuItem, FormHelperText, Typography,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


const SelectSimple = ({}) => {
    //
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    /*
    * handleChange
    * */
    const handleChange = (event) => {
        setAge(event.target.value);
    };


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Simple Select </Typography>
                {/**...*/}
                <FormControl className={classes.formControl}>
                    <InputLabel color={'secondary'} id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        color={'secondary'}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                {/**...*/}
                <FormControl className={classes.formControl} error={false}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>

                {/**...read only..*/}
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-readonly-label">Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-readonly-label"
                        id="demo-simple-select-readonly"
                        value={age}
                        onChange={handleChange}
                        inputProps={{ readOnly: true }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Read only</FormHelperText>
                </FormControl>

                {/**..set placeholder*/}
                <FormControl className={classes.formControl}>
                    <Select
                        color={'secondary'}
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="" disabled>
                            Placeholder
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Placeholder</FormHelperText>
                </FormControl>

                {/**...set require..*/}
                <FormControl required ={true} className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label"
                        id="demo-simple-select-required"
                        value={age}
                        onChange={handleChange}
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>

                {/**...set outline..*/}
                <FormControl variant="outlined"  className={classes.formControl}>
                    <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Outline</FormHelperText>
                </FormControl>

                {/**..filled*/}
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel color={'secondary'} id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                        color={'secondary'}
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Filled</FormHelperText>
                </FormControl>

            </div>
        </>
    );
}

export default SelectSimple;
