export type StationTag =
  | 'music'
  | 'classical'
  | 'hits'
  | 'pop & dance'
  | 'news'
  | 'world news'
  | 'holiday music'
  | 'talk'
  | 'local news'
  | 'sports';

export interface Station {
  id: string;
  description: string;
  name: string;
  imgUrl: string;
  streamUrl: string;
  reliability: number;
  popularity?: number;
  tags: StationTag[];
}
