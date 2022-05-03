import React from 'react'
import {Grid, Typography} from '@mui/material'

const Status: React.FC<{ status: string }> = ({status}) => {
    return (
        <Grid item xs={12} my={3} textAlign="center">
            <Typography variant="h5">{status}</Typography>
        </Grid>
    )
}

export default Status
