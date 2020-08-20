import React, {useState} from 'react';
import {FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Typography} from '@material-ui/core';
import {useStyles} from './styles';

//color
import { blue, green } from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';



const RadioBasic =({})=> {

    const classes = useStyles();

    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <div className={classes.root}>
                {/**...title..*/}
                <Typography variant={'h5'}> Basic Radio </Typography>
                {/**...*/}
               <FormControl component="fieldset">
                    <FormLabel
                        color = 'secondary'
                        component="legend">
                        Gender
                    </FormLabel>

                   <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                       <FormControlLabel value="female" control={<Radio />} label="Female" />
                       <FormControlLabel value="male" control={<Radio />} label="Male" />
                       <FormControlLabel value="other" control={<Radio />} label="Other" />
                       <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                   </RadioGroup>
               </FormControl>
            </div>
        </>
    );
}

export default RadioBasic;
