import React from 'react'
import {AppRouter, Header} from './global/export'
import {Box, Container} from '@mui/material'

function App() {
    return (
        <Container maxWidth={false} disableGutters={true}  sx={{overflow: 'hidden'}}>
            <Header/>
            <Box>
                <AppRouter/>
            </Box>
        </Container>
    )
}

export default App
