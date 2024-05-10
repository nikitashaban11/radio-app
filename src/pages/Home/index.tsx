import { useState } from 'react';
import { Box, SelectChangeEvent } from '@mui/material';
import { MediaCard, Spinner } from '../../components/UI';
import { ErrorPage } from '../Error/index.tsx';
import { useGetStationsQuery } from '../../services/station';
import { SearchControls } from '../../components/SearchControls/index.tsx';
import { useFilteredAndSortedStations, useGetUniqueTags } from '../../hooks';
import type { StationTag } from '../../services/types.ts';

export type SortBy = 'none' | 'reliability' | 'popularity';

export const Home = () => {
  const { data: stations, error, isLoading } = useGetStationsQuery();
  const [filters, setFilters] = useState<StationTag[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>('none');

  const handleTagChange = (event: SelectChangeEvent<StationTag[]>) => {
    const value = event.target.value as StationTag[];

    setFilters(value);
  };

  const handleSortChange = (event: SelectChangeEvent<SortBy>) => {
    const value = event.target.value as SortBy;

    setSortBy(value);
  };

  const filteredAndSortedStations = useFilteredAndSortedStations(
    stations,
    filters,
    sortBy
  );

  const tags = useGetUniqueTags(stations);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <Box sx={{ padding: 3 }}>
      <SearchControls
        tags={tags}
        filters={filters}
        sortBy={sortBy}
        onTagChange={handleTagChange}
        onSortChange={handleSortChange}
      />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexWrap='wrap'
        gap={4}
      >
        {filteredAndSortedStations?.map(({ id, ...other }) => (
          <MediaCard key={id} id={id} {...other} />
        ))}
      </Box>
    </Box>
  );
};
