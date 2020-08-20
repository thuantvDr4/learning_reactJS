import React, {useState} from 'react';
import {FormControl, InputLabel, Select, Typography, FormHelperText, NativeSelect,} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


const SelectNative = ({}) => {
    //
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };


    //
    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Native Select </Typography>
                {/**...*/}
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-helper">Age</InputLabel>
                    <NativeSelect
                        value={state.age}
                        onChange={handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-helper',
                        }}
                    >
                        <option aria-label="None" value=""/>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    <FormHelperText>Some important helper text</FormHelperText>
                </FormControl>

                {/**..set error..*/}
                <FormControl className={classes.formControl} error>
                    <InputLabel htmlFor="name-native-error">Name</InputLabel>
                    <NativeSelect
                        value={state.name}
                        onChange={handleChange}
                        name="name"
                        inputProps={{
                            id: 'name-native-error',
                        }}
                    >
                        <optgroup label="Author">
                            <option value="hai">Hai</option>
                        </optgroup>
                        <optgroup label="Contributors">
                            <option value="olivier">Olivier</option>
                            <option value="kevin">Kevin</option>
                        </optgroup>
                    </NativeSelect>
                    <FormHelperText>Error</FormHelperText>
                </FormControl>

                {/**...set placeholder..*/}
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        className={classes.selectEmpty}
                        value={state.age}
                        name="age"
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'age' }}
                    >
                        <option value="" disabled>
                            Placeholder
                        </option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                    <FormHelperText>Placeholder</FormHelperText>
                </FormControl>

                {/**...set outline..*/}


            </div>
        </>
    );
}

export default SelectNative;
