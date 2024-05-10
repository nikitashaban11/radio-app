import {
  Box,
  Card,
  Checkbox,
  OutlinedInput,
  MenuItem,
  Select,
  Typography,
  ListItemText,
  SelectChangeEvent,
} from '@mui/material';
import { StationTag } from '../../services/types';
import type { SortBy } from '../../pages/Home';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const renderValue = (selected: StationTag[]) => {
  const numberOfItemsToShow = 1;
  if (selected.length === numberOfItemsToShow) {
    return selected.join(', ');
  }

  const displayed = selected.slice(0, numberOfItemsToShow).join(', ');
  const additionalCount = selected.length - numberOfItemsToShow;
  return `${displayed} +${additionalCount} more...`;
};

interface SearchControlsProps {
  tags: StationTag[];
  filters: StationTag[];
  sortBy: SortBy;
  onTagChange: (event: SelectChangeEvent<StationTag[]>) => void;
  onSortChange: (event: SelectChangeEvent<SortBy>) => void;
}

export const SearchControls = ({
  tags,
  filters,
  sortBy,
  onTagChange,
  onSortChange,
}: SearchControlsProps) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: '20px auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: { xs: 'center', sm: 'flex-start' },
        padding: { xs: 2, sm: 4 },
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 2, sm: 4 },
      }}
    >
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant='h6'>Filter by Tags:</Typography>
        <Select<StationTag[]>
          multiple
          value={filters}
          onChange={onTagChange}
          input={<OutlinedInput />}
          renderValue={renderValue}
          MenuProps={MenuProps}
          sx={{ mt: 1, width: '100%' }}
        >
          {tags.map((tag) => {
            const checked = filters.indexOf(tag) > -1;
            return (
              <MenuItem key={tag} value={tag}>
                <Checkbox checked={checked} />
                <ListItemText primary={tag} />
              </MenuItem>
            );
          })}
        </Select>
      </Box>
      <Box sx={{ width: '100%', textAlign: 'center' }}>
        <Typography variant='h6'>Sort Stations:</Typography>
        <Select<SortBy>
          value={sortBy}
          fullWidth
          onChange={onSortChange}
          displayEmpty
          sx={{ mt: 1 }}
        >
          <MenuItem value='none'>No Sort</MenuItem>
          <MenuItem value='reliability'>By Reliability</MenuItem>
          <MenuItem value='popularity'>By Popularity</MenuItem>
        </Select>
      </Box>
    </Card>
  );
};
