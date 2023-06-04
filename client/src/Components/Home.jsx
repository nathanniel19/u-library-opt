import React from 'react';

import { 
    Container,
} from '@mui/material'

import Navbar from './Navbar';
import CardProblem from './CardProblem';


const Home = () => {
  return (
    <div>
        <Navbar />

        <Container>
            <CardProblem />
        </Container>
        
        
    </div>
  )
}

export default Home