import { Container, Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

interface ErrorPageProps {
  errorCode?: number;
  errorMessage?: string;
}

export const ErrorPage = ({ errorCode, errorMessage }: ErrorPageProps) => {
  return (
    <Container component='main' maxWidth='sm' sx={{ mt: 8, mb: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '60vh',
        }}
      >
        <Typography component='h1' variant='h2' color='error' gutterBottom>
          {errorCode || 'Error'}
        </Typography>
        <Typography variant='h5' sx={{ mb: 2 }}>
          {errorMessage || 'Something went wrong!'}
        </Typography>
        <Typography variant='body1' sx={{ mb: 3 }}>
          We're having trouble loading the page you requested. Please try again
          later.
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={RouterLink}
          to='/'
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
};
