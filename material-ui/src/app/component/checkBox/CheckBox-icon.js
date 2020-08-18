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


const CheckBox_Icon =({})=> {
    const [checked, setChecked] = React.useState(true);
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });


    const handleChange_2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <FormGroup row>

                    <FormControlLabel
                        control={
                            <GreenCheckbox
                                checked={state.checkedG}
                                onChange={handleChange_2}
                                name="checkedG" />
                        }
                        label="Custom color"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                name="checkedH" />
                        }
                        label="Custom icon"
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={
                                    <CheckBoxIcon fontSize="small" />
                                }
                                name="checkedI"
                            />
                        }
                        label="Custom size"
                    />

                </FormGroup>

            </div>
        </>
    );
}

export default CheckBox_Icon;
