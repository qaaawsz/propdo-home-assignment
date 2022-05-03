import React from 'react'
import {AppBar, Box, Button, Toolbar} from '@mui/material'
import {NavLink} from 'react-router-dom'
import {RouteNames} from '../routes'

const Header = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{background: 'rgba(35, 55, 75, 1)'}}>
                <Toolbar>
                    <Button component={NavLink} to={RouteNames.MAP} color="inherit">Map</Button>
                    <Button component={NavLink} to={RouteNames.REALESTATE} color="inherit">Real Estate</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
