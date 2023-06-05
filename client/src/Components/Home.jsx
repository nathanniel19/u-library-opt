import React from 'react';

import { 
  Card,
  Container,
  Box
} from '@mui/material'

import Navbar from './Navbar';
import CardProblem from './CardProblem';
import CardDailyActivity from './CardDailyActivity';


const Home = () => {
  return (
    <div>
        <Navbar />

        <Container>
          <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: "column", md: "row"},
                    gap: 2,
                    justifyContent: "space-between"
                }}>
            <CardProblem />
            <CardDailyActivity />
          </Box>
        </Container>
        
        
        
    </div>
  )
}

export default Home