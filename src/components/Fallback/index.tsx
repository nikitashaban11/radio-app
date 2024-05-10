import { Box, Button, Typography, Container } from '@mui/material';

export const Fallback = () => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <Container component='main' maxWidth='sm'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <Typography variant='h4' component='h1' gutterBottom>
          Oops! Something went wrong.
        </Typography>
        <Typography variant='body1'>
          We're having trouble loading this page. Please try refreshing the
          page, or contact support if the problem persists.
        </Typography>
        <Button variant='contained' color='primary' onClick={handleRetry}>
          Refresh Page
        </Button>
      </Box>
    </Container>
  );
};
