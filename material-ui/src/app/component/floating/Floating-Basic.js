import React, {useState} from 'react';
import {Fab, } from '@material-ui/core';
import {useStyles} from './styles';

//color
import { blue, green } from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';



const FloatingBasic =({})=> {

    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>

                {/**..muon them label phai dung variant = extended..*/}
                <Fab variant="extended">
                    <NavigationIcon className={classes.extendedIcon} />
                    Navigate
                </Fab>

                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>

            </div>

            {/**..customer size*/}
            <div className={classes.root}>
                <Fab size="small" color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="primary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add" className={classes.margin}>
                    <AddIcon />
                </Fab>
            </div>

        </>
    );
}

export default FloatingBasic;
