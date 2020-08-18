import React from 'react';
import {Button, IconButton, ButtonGroup  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import { makeStyles } from '@material-ui/core/styles';
import {useStyles} from './styles';



const Button_Group =({})=> {

    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <ButtonGroup color="secondary" aria-label="outlined primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>

                <ButtonGroup
                    disableElevation={ false}
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>

                <ButtonGroup
                    disableElevation={ false}
                    disabled = {false}
                    variant="text"
                    color="secondary"
                    aria-label="text primary button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>

                {/**..column..*/}
                <div className={classes.root}>
                    <ButtonGroup
                        orientation="vertical"
                        color="secondary"
                        aria-label="vertical outlined primary button group"
                    >
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="contained"
                    >
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                    <ButtonGroup
                        orientation="vertical"
                        color="secondary"
                        aria-label="vertical contained primary button group"
                        variant="text"
                    >
                        <Button>One</Button>
                        <Button>Two</Button>
                        <Button>Three</Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}

export default Button_Group;
