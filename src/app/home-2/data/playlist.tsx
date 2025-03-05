export interface PlayList {
  [x: string]: any;
  id: number;
  name: string;
  value: string;
}
export const playlist: PlayList[] = [
  { id: 1, name: "Recently Added", value: "recently_added" },
  { id: 2, name: "Recently Played", value: "recently_played" },
  { id: 3, name: "Top Songs", value: "top_song" },
  { id: 4, name: "Top Albums", value: "top_albums" },
  { id: 5, name: "Top Artists", value: "top_artist" },
  { id: 6, name: "Logic Discography", value: "logic_discography" },
  { id: 7, name: "Bedtime Beats", value: "bedtime_beats" },
  { id: 8, name: "Feeling Happy", value: "feeling_happy" },
  { id: 9, name: "I miss Y2K Pop", value: "i_miss_y2k_pop" },
  { id: 10, name: "Runtober", value: "runtober" },
  { id: 11, name: "Mellow Days", value: "mellow_days" },
  { id: 12, name: "Eminem Essentials", value: "Eminem Essentials" },
];
