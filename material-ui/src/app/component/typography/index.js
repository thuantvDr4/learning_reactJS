import React from 'react';
import {Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useStyles} from './styles';



const CustomTypography =({})=> {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" className ={classes.textStyle} align = 'center'>
                <Box fontWeight="fontWeightLight" m={1}>
                    Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                    Donec sed odio operae, eu vulputate felis rhoncus.
                </Box>

                <Box fontWeight="fontWeightRegular" m={1}>
                    Regular
                </Box>

                <Box fontWeight="700" m={1} color='red' component='div'>
                    Bold
                </Box>

                Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum.
                Donec sed odio operae, eu vulputate felis rhoncus.
            </Typography>
        </div>
    );
}

export default CustomTypography;
