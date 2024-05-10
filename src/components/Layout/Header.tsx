import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

export const Header = () => {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant='h6'
            noWrap
            component={Link}
            to='/'
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Radio app
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
