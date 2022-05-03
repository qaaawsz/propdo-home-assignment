import React from 'react'
import {Button, Grid, Typography} from '@mui/material'
import {Link} from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} px={2}>
                <Typography variant="body1" color="text.secondary" textAlign="center" my={2}>
                    You're on main page. This application consists from 2 pages that you can visit:
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center" my={2}>
                    <Link to={'/map'}>Map</Link>
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center" my={2}>
                    <Link to={'/real-estate'}>Real Estate</Link>
                </Typography>
            </Grid>

        </Grid>
    )
}

export default Home
