import React from 'react';
import { 
  ThemeProvider, 
  Box, 
  AppBar, 
  Typography
 } from '@mui/material';
import Theme from '../Theme.jsx'

const Navbar = () => {
  return (
    <div>
        <ThemeProvider theme={Theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position='static' sx={{ pb: 1, pt : 1}} >
                    <Typography variant='h5' align='center'>U-Library</Typography>
                </AppBar>
            </Box>
        </ThemeProvider>
    </div>
  )
}

export default Navbar