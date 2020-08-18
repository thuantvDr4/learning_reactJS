import React from 'react';
import {Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { makeStyles } from '@material-ui/core/styles';
import {useStyles} from './styles';



const CustomButton =({})=> {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                onClick={() => { alert('clicked') }}
                className={classes.button_style}
                variant="contained" >
                {'Default'}
            </Button>
            <Button variant="contained" color="primary">
                Primary
            </Button>
            <Button variant="contained" color="secondary">
                Secondary
            </Button>
            <Button variant="outlined" disabled>
                Disabled
            </Button>
            <Button variant="contained" color="primary" href="#contained-buttons">
                Link
            </Button>
            {/**...icon-button...*/}
            <div>
                <IconButton aria-label="delete" className={classes.margin} size="small">
                    <AirplanemodeActiveIcon fontSize="inherit" className ={classes.iconStyle} />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon fontSize="large" />
                </IconButton>
            </div>
        </div>
    );
}

export default CustomButton;
