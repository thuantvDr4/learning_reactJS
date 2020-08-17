import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, IconButton} from '@material-ui/core';
import {useStyles} from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SendIcon from '@material-ui/icons/Send';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



const ButtonIcon =({})=> {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DeleteIcon />}
            >
                Delete
            </Button>
            {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<SendIcon/>}
            >
                Send
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                startIcon={<CloudUploadIcon />}
            >
                Upload
            </Button>
            <Button
                variant="contained"
                disabled ={true}
                color="secondary"
                className={classes.button}
                startIcon={<KeyboardVoiceIcon />}
            >
                Talk
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
            >
                Save
            </Button>

            {/**..icon-button..*/}
            <div>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </div>

        </div>
    );
}

export default ButtonIcon;
