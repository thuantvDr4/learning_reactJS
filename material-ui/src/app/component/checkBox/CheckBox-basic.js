import React, {useState} from 'react';
import {Checkbox, FormGroup, FormControlLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {useStyles} from './styles';

//color
import { blue, green } from '@material-ui/core/colors';

//ICON
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

//custom style
const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);


const CheckBoxBasic =({})=> {
    const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChange_2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Checkbox
                    className={classes.checkBox_st}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'primary checkbox'}}
                />
                <Checkbox
                    defaultChecked
                    color="primary"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
                <Checkbox inputProps={{'aria-label': 'uncontrolled-checkbox'}}/>
                <Checkbox disabled inputProps={{'aria-label': 'disabled checkbox'}}/>
                <Checkbox disabled checked inputProps={{'aria-label': 'disabled checked checkbox'}}/>
                <Checkbox
                    defaultChecked
                    indeterminate
                    inputProps={{'aria-label': 'indeterminate checkbox'}}
                />
                <Checkbox
                    defaultChecked
                    color="default"
                    inputProps={{'aria-label': 'checkbox with default color'}}
                />
                <Checkbox
                    defaultChecked
                    size="small"
                    inputProps={{'aria-label': 'checkbox with small size'}}
                />
            </div>

            {/**..Checkbox with FormControlLabel..*/}
            <div className={classes.root}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox checked={state.checkedA}
                                      onChange={handleChange_2}
                                      name="checkedA" />
                        }
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedB}
                                onChange={handleChange_2}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Primary"
                    />
                    <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
                    <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
                    <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={state.checkedF}
                                onChange={handleChange_2}
                                name="checkedF"
                                indeterminate
                            />
                        }
                        label="Indeterminate"
                    />
                </FormGroup>
            </div>
        </>
    );
}

export default CheckBoxBasic;
