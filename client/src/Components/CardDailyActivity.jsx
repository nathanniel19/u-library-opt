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

const CardDailyActivity = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ThemeProvider theme={Theme}>
                <Card sx={{ maxWidth: 300, marginTop: 10, height: 200 }}>
                    <CardContent>
                        <Typography variant='h6' fontWeight='600' align='center'>Daily Activity Report</Typography>
                        <Typography variant='body1' align='center' sx={{mt: 2.5}}>Submit dan Check Daily Activity Report</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' sx={{ mt: 2 }} onClick={()=> navigate('/dailyActivity')}>Lihat selengkapnya...</Button>
                    </CardActions>
                </Card>
            </ThemeProvider>
        </div>
  )
}

export default CardDailyActivity;