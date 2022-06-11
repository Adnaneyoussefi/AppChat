import React from 'react'
import WorkSpaces from '../components/WorkSpaces';
import {Grid, Typography} from '@mui/material';
import CreateWorkSpace from '../components/CreateWorkSpace';

const HomeScreen = () => {
  return (
    <Grid 
        container
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ marginTop: 5 }}
        >
        <Grid item xs={2}>
            <Typography variant="h4" component="div" gutterBottom sx={{ fontWeight: 900 }}>
                slack
            </Typography>
        </Grid>
        <Grid item xs={2}>
            <Typography variant="h4" component="div" gutterBottom sx={{ color: "#4F0E00", fontFamily: 'system-ui', fontWeight: 'bold'}}>
                Welcome back! You look nice today.
            </Typography>
        </Grid>
        <Grid item xs={2}>
            Choose a workspace below to get back to working with your team.
        </Grid>
        <WorkSpaces />
        <CreateWorkSpace />
    </Grid>
  )
}

export default HomeScreen