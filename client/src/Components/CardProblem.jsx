import React from 'react';

import { Card,
    CardActions, 
    CardContent, 
    Button,
    Typography,
    ThemeProvider,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Theme from "../Theme";

const CardProblem = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Card sx={{ maxWidth: 300, marginTop: 10 }}>
                    <CardContent>
                        <Typography variant='h6' fontWeight='600' align='center'>Problem Documentation</Typography>
                        <Typography variant='body1' align='center' sx={{mt: 2}}>Berbagai macam problem yang terjadi di unit beserta troubleshooting guidance nya</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' onClick={()=> navigate('/problemList')}>Lihat selengkapnya...</Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
  )
}

export default CardProblem