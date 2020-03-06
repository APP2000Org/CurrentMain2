import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import EventCards from "./EventCards";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        color: theme.palette.text.secondary,
    },
}));
export default function MainContainerGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <EventCards/> {/*EventCards kommer fra EventCards.jsx*/}
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs>
                    <EventCards/>
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
                <Grid item xs>
                    <EventCards/>
                </Grid>
            </Grid>
        </div>
    );
}