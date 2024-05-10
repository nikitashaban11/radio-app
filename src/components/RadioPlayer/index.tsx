import { useState, useRef, useEffect } from 'react';
import {
  IconButton,
  Slider,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Box,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { Station } from '../../services/types';

interface RadioPlayerProps extends Station {}

export const RadioPlayer = ({
  description,
  imgUrl,
  name,
  streamUrl,
  tags,
}: RadioPlayerProps) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const [muted, setMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audioRef.current = audio;
    audio.src = streamUrl;
    audio.load();
    setPlaying(true);

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [streamUrl]);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current && playing) {
        try {
          await audioRef.current.play();
        } catch (error) {
          console.error('Error playing the audio', error);
        }
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    };

    playAudio();
  }, [playing]);

  const togglePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    const newVolume = Array.isArray(newValue) ? newValue[0] : newValue;

    setVolume(() => {
      if (audioRef.current) {
        audioRef.current.volume = newVolume / 100;
      }

      return newVolume;
    });
  };

  const toggleMute = () => {
    setMuted((prev) => {
      if (audioRef.current) {
        audioRef.current.muted = !prev;
      }

      return !prev;
    });
  };

  return (
    <Card
      sx={{
        maxWidth: 800,
        m: 'auto',
        p: 3,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component='img'
        sx={{ height: 400 }}
        image={imgUrl}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Typography gutterBottom variant='h4' component='div'>
          {name}
        </Typography>
        <Typography
          variant='body1'
          color='text.secondary'
          sx={{ whiteSpace: 'pre-wrap' }}
        >
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 2 }}>
          {tags.map((tag, index) => (
            <Chip key={index} label={tag} variant='outlined' />
          ))}
        </Box>
      </CardContent>
      <Grid container alignItems='center' padding={2}>
        <IconButton onClick={togglePlayPause} size='large'>
          {playing ? (
            <PauseIcon fontSize='large' />
          ) : (
            <PlayArrowIcon fontSize='large' />
          )}
        </IconButton>
        <IconButton onClick={toggleMute} size='large'>
          {muted ? (
            <VolumeOffIcon fontSize='large' />
          ) : (
            <VolumeUpIcon fontSize='large' />
          )}
        </IconButton>
        <Slider
          aria-label='Volume'
          value={muted ? 0 : volume}
          onChange={handleVolumeChange}
          sx={{ width: 200 }}
        />
      </Grid>
    </Card>
  );
};
