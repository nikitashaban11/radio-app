import { useMemo } from 'react';
import type { Station, StationTag } from '../services/types';
import type { SortBy } from '../pages/Home';

const filterStationsByTags = (stations: Station[], filters: StationTag[]) =>
  stations.filter((station) =>
    station.tags.some((tag) => filters.includes(tag))
  );

const sortStations = (stations: Station[], sortBy: SortBy) => {
  if (sortBy === 'none') return stations;

  const sorter = {
    reliability: (a: Station, b: Station) => b.reliability - a.reliability,
    popularity: (a: Station, b: Station) =>
      (b.popularity ?? 0) - (a.popularity ?? 0),
  };

  return stations.sort(sorter[sortBy] || (() => 0));
};

export const useFilteredAndSortedStations = (
  stations: Station[] = [],
  filters: StationTag[],
  sortBy: SortBy
) =>
  useMemo(() => {
    const filteredStations =
      filters.length > 0
        ? filterStationsByTags(stations, filters)
        : [...stations];

    return sortStations(filteredStations, sortBy);
  }, [stations, filters, sortBy]);
