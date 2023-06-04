import React from 'react';
import {
    Card,
    CardAction,
    CardContent,
    Button,
    Typography,
    ThemeProvider,
    Container,
    Box,
} from '@mui/material';

import Theme from '../Theme.jsx';
import ProblemData from './ProblemData.jsx';
import DialogProblem from './DialogProblem.jsx';

const ProblemContent = () => {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Container>
          <Card sx={{ maxWidth: 1200, mt: 5 }}>
            <CardContent>
              <Typography variant="h5" fontWeight='600' align="center">Problem Documentation</Typography>
              <Typography variant='body1' align='center'>Kumpulan berbagai macam problem yang terjadi di unit</Typography>
              <DialogProblem />
              <ProblemData />
            </CardContent>
          </Card>
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default ProblemContent