import { Box, Grid } from '@mui/material'
import React from 'react'
import BodyCard from './BodyCard'

const Content = () => {
  return (
    <Box sx={{ flexGrow: 1}}>
        <Grid 
            container 
            direction="row"
            spacing={1}
            justifyContent="center"
            marginTop={5}
            >
            <Grid item xs={3}>
                <BodyCard />
            </Grid>
            <Grid item xs={3}>
                <BodyCard />
            </Grid>
            <Grid item xs={3}>
                <BodyCard />
            </Grid>
        </Grid>
    </Box>
  );
}

export default Content