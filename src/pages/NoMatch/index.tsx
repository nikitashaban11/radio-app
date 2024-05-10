import { Typography, Box, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const NoMatch = () => {
  return (
    <Container maxWidth='sm'>
      <Box
        sx={{
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography variant='h2' component='h1' gutterBottom>
          404
        </Typography>
        <Typography variant='h5' gutterBottom>
          Sorry, the page you are looking for does not exist.
        </Typography>
        <Typography variant='body1' color='text.secondary' mb={2}>
          It looks like nothing was found at this location. Maybe try one of the
          links below or a search?
        </Typography>
        <Button
          variant='contained'
          color='primary'
          component={RouterLink}
          to='/'
        >
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
};
