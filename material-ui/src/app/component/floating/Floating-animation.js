import React, {useState} from 'react';
import {Fab, AppBar, Tabs, Tab, Typography, Box, Zoom, } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { floatingStyle as useStyles} from './styles';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import clsx from 'clsx';

//color
import { blue, green } from '@material-ui/core/colors';

//ICON
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import NavigationIcon from '@material-ui/icons/Navigation';



//
const TabPanel =(props)=> {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

//
const FloatingWithAnimation =({})=> {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const theme = useTheme();


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    const handleChangeIndex = (index) => {
        setValue(index);
    };


    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };


    const fabs = [
        {
            color: 'primary',
            className: classes.fab,
            icon: <AddIcon />,
            label: 'Add',
            onClick: ()=>alert('add')
        },
        {
            color: 'secondary',
            className: classes.fab,
            icon: <EditIcon />,
            label: 'Edit',
            onClick: ()=>alert('Edit')
        },
        {
            color: 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon />,
            label: 'Expand',
            onClick: ()=>alert('Expand')
        },
    ];

    return (
        <>
            <div className={classes.root}>
                <Typography variant='h5'>{'Floating with animation'}</Typography>
                {/**..AppBar && Tabs..*/}
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="secondary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                {/**..SwipeView..*/}
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                        Item Three
                    </TabPanel>
                </SwipeableViews>

                {/**..render floating..*/}
                {fabs.map((fab, index) => (
                    <Zoom
                        key={fab.color}
                        in={value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                    >
                        <Fab
                            onClick = {fab.onClick}
                            aria-label={fab.label}
                             className={fab.className}
                             color={fab.color}>
                            {fab.icon}
                        </Fab>
                    </Zoom>
                ))}

            </div>

        </>
    );
}

export default FloatingWithAnimation;
