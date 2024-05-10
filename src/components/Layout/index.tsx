import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { Header } from './Header';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
    </Box>
  );
};
