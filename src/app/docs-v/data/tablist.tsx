import {
  LayoutGrid,
  Radio,
  CirclePlay,
  ListMusic,
  Music2,
  User,
  Library,
  Mic,
} from "lucide-react";
export interface TabList {
  id: number;
  icon: JSX.Element;
  tabname: string;
  value: string;
}
export const tablist: TabList[] = [
  {
    id: 1,
    icon: <CirclePlay className="h-4 w-4" />,
    tabname: "Listen Now",
    value: "listennow",
  },
  {
    id: 2,
    icon: <LayoutGrid className="h-4 w-4" />,
    tabname: "Browse",
    value: "browse",
  },
  {
    id: 3,
    icon: <CirclePlay className="h-4 w-4" />,
    tabname: "Radio",
    value: "radio",
  },
  {
    id: 4,
    icon: <ListMusic className="h-4 w-4" />,
    tabname: "PlayList",
    value: "playlist",
  },
  {
    id: 5,
    icon: <Music2 className="h-4 w-4" />,
    tabname: "Song",
    value: "song",
  },
  {
    id: 6,
    icon: <User className="h-4 w-4" />,
    tabname: "Make for You",
    value: "make_for_you",
  },
  {
    id: 7,
    icon: <Mic className="h-4 w-4" />,
    tabname: "Artists",
    value: "artists",
  },
  {
    id: 8,
    icon: <Library className="h-4 w-4" />,
    tabname: "Albums",
    value: "albums",
  },
  {
    id: 9,
    tabname: "Recently Added",
    value: "recently_added",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 10,
    tabname: "Recently Played",
    value: "recently_played",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 11,
    tabname: "Top Songs",
    value: "top_song",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 12,
    tabname: "Top Albums",
    value: "top_albums",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 13,
    tabname: "Top Artists",
    value: "top_artist",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 14,
    tabname: "Logic Discography",
    value: "logic_discography",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 15,
    tabname: "Bedtime Beats",
    value: "bedtime_beats",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 16,
    tabname: "Feeling Happy",
    value: "feeling_happy",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 17,
    tabname: "I miss Y2K Pop",
    value: "i_miss_y2k_pop",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 18,
    tabname: "Runtober",
    value: "runtober",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 19,
    tabname: "Mellow Days",
    value: "mellow_days",
    icon: <ListMusic className="h-4 w-4" />,
  },
  {
    id: 20,
    tabname: "Eminem Essentials",
    value: "Eminem Essentials",
    icon: <ListMusic className="h-4 w-4" />,
  },
];
