import { useMemo } from "react";
import { Station, StationTag } from "../services/types";

export const useGetUniqueTags = (data: Station[] = []) => {
  return useMemo(() => {
    const allTags = data.reduce<StationTag[]>((acc, { tags }) => {
      acc.push(...tags);
      return acc;
    }, []);

    return Array.from(new Set(allTags));
  }, [data]);
};
