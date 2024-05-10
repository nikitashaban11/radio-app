import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  Chip,
  LinearProgress,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import type { Station } from '../../../services/types';

interface MediaCardProps extends Omit<Station, 'streamUrl'> {}

export const MediaCard = ({
  name,
  imgUrl,
  id,
  tags,
  reliability,
  popularity = 0,
}: MediaCardProps) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLearnMoreClick = () => navigate(`/station/${id}`);

  return (
    <Card
      sx={{
        width: 345,
        height: 550,
        display: 'flex',
        flexDirection: 'column',
        transition: '0.3s',
        boxShadow: 1,
        ...(isMobile
          ? {}
          : {
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: 6,
              },
            }),
      }}
    >
      <CardMedia sx={{ height: 350 }} image={imgUrl} title={name} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant='outlined' />
          ))}
        </Box>
        <Box sx={{ width: '100%', mb: 1 }}>
          <Tooltip title={`Reliability: ${reliability}%`} placement='bottom'>
            <Box>
              <Typography variant='caption' color='text.secondary'>
                Reliability
              </Typography>
              <LinearProgress
                variant='determinate'
                value={reliability}
                sx={{ height: 8, borderRadius: 5 }}
              />
            </Box>
          </Tooltip>
        </Box>
        <Box sx={{ width: '100%' }}>
          <Tooltip title={`Popularity: ${popularity}/5`} placement='bottom'>
            <Box>
              <Typography variant='caption' color='text.secondary'>
                Popularity
              </Typography>
              <LinearProgress
                variant='determinate'
                value={(popularity / 5) * 100}
                sx={{ height: 8, borderRadius: 5 }}
              />
            </Box>
          </Tooltip>
        </Box>
      </CardContent>
      <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}>
        <Button
          aria-label={`Listen to ${name}`}
          fullWidth
          onClick={handleLearnMoreClick}
        >
          Go to Station
        </Button>
      </CardActions>
    </Card>
  );
};
