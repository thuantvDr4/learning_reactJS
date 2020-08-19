import React, {useState} from 'react';
import {
    FormControl, FormLabel,
    FormControlLabel, Radio, RadioGroup,
    Typography, FormHelperText, Button,
} from '@material-ui/core';
import {useStyles} from './styles';

//color
import {blue, green} from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';


const RadioShowError = ({}) => {

    const classes = useStyles();

    const [value, setValue] = useState('');
    const [helperText, setHelperText] = useState('Choose wisely');
    const [error, setError] = useState(false);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };


    function handleSubmit (event) {
        event.preventDefault();

        if (value === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (value === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    }



    return (
        <>
            <div className={classes.root}>
                {/**..title..*/}
                <Typography variant='h5'>{'Radio with show error'}</Typography>

                <form onSubmit={handleSubmit}>
                    <FormControl
                        error={error}
                        component="fieldset"
                        className={classes.formControl}
                    >
                        <FormLabel
                            color='secondary'
                            component="legend"
                        >
                            {'Pop quiz: Material-UI is...'}
                        </FormLabel>

                        <RadioGroup aria-label="quiz"
                                    name="quiz"
                                    value={value}
                                    onChange={handleRadioChange}>

                            <FormControlLabel
                                value="best"
                                control={<Radio color="secondary"/>}
                                label="The best!"
                            />
                            <FormControlLabel
                                value="worst"
                                control={<Radio color="secondary"/>}
                                label="The worst."
                            />

                            <FormHelperText>{helperText}</FormHelperText>

                            <Button type="submit" variant="outlined" color="secondary" className={classes.button}>
                                Check Answer
                            </Button>

                        </RadioGroup>
                    </FormControl>
                </form>
            </div>
        </>
    );
}

export default RadioShowError;
