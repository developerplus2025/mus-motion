import React, { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  EllipsisVertical,
  Heart,
  House,
  ListPlus,
  Play,
  PlayCircle,
  Podcast,
  Save,
  SkipBack,
  SkipForward,
  UserRound,
} from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Clock } from "lucide-react";
import { Guitar } from "lucide-react";
import { PanelGroup, Panel } from "react-resizable-panels";
import { Music2 } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Pizza } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Fish } from "lucide-react";
import { Ham } from "lucide-react";
import { Cake } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Headphones } from "lucide-react";
import { WifiOff } from "lucide-react";
import { NotebookText } from "lucide-react";
import { Medal } from "lucide-react";
import { Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
export const NavigationEffect: React.FC = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs: React.FC = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <Tab setPosition={setPosition}>
              <NavigationMenuTrigger>Feature</NavigationMenuTrigger>
            </Tab>
            <NavigationMenuContent className="flex w-[30rem] gap-[2.5rem] px-[1rem] py-[1rem] data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
              <div className="flex flex-col gap-[2rem]">
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <Lightbulb className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      Smart Recommendations
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Discover music curated just for you.
                    </p>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <WifiOff className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      Offline Mode
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Download songs and listen offline.
                    </p>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <Podcast className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      Podcasts
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Access a wide range of podcasts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between">
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <NotebookText className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      Lyrics Display
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Sing along with on-screen lyrics.
                    </p>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <Medal className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      High-Quality Audio
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Enjoy lossless audio streaming.
                    </p>
                  </div>
                </div>
                <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                  <div>
                    <Share2 className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <NavigationMenuLink className="text-nowrap text-sm font-bold">
                      Social Sharing
                    </NavigationMenuLink>
                    <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                      Share your favorite tracks on social media.
                    </p>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Tab setPosition={setPosition}>
              <NavigationMenuTrigger>Library</NavigationMenuTrigger>
            </Tab>
            <NavigationMenuContent className="flex w-[37rem] justify-between gap-[2.5rem] px-[1rem] py-[1rem]">
              <div className="grid w-[37rem] grid-cols-2 place-content-between gap-[2rem]">
                <div className="flex flex-col gap-[1.5rem]">
                  <div>
                    <h1 className="text-[1rem] text-[#a1a1a1]">Playlist</h1>
                  </div>
                  <div className="flex flex-col gap-[1.8rem]">
                    <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                      <div>
                        <ListPlus className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Create New
                        </NavigationMenuLink>
                        <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                          Start personalized playlists here.
                        </p>
                      </div>
                    </div>
                    <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                      <div>
                        <Heart className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Favorites
                        </NavigationMenuLink>
                        <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                          Manage curated favorite playlists.
                        </p>
                      </div>
                    </div>
                    <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                      <div>
                        <Play className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Currently Playing
                        </NavigationMenuLink>
                        <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                          View active playlists now.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[1.5rem]">
                  <div>
                    <h1 className="text-[1rem] text-[#a1a1a1]">
                      Listening History
                    </h1>
                  </div>
                  <div className="flex flex-col gap-[1.8rem]">
                    <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                      <div>
                        <Clock className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Recent
                        </NavigationMenuLink>
                        <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                          Review recently played songs and albums.
                        </p>
                      </div>
                    </div>
                    <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                      <div>
                        <Save className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <NavigationMenuLink className="text-nowrap text-sm font-bold">
                          Saved
                        </NavigationMenuLink>
                        <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                          Access saved songs and albums.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator className="" />
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Tab setPosition={setPosition}>Documentation</Tab>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Tab setPosition={setPosition}>Pricing</Tab>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Tab setPosition={setPosition}>Resources</Tab>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <Tab setPosition={setPosition}>Enterprise</Tab>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Cursor position={position} />
    </ul>
  );
};

interface TabProps {
  children: ReactNode;
  setPosition: (position: {
    left: number;
    width: number;
    opacity: number;
  }) => void;
}

const Tab: React.FC<TabProps> = ({ children, setPosition }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="z-10 block cursor-pointer px-3 text-white mix-blend-difference"
    >
      {children}
    </div>
  );
};

interface CursorProps {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}

const Cursor: React.FC<CursorProps> = ({ position }) => {
  return (
    <motion.div
      animate={{
        ...position,
      }}
      className="absolute top-1/2 z-0 h-7 -translate-y-1/2 rounded-full bg-[#1f1f1f]"
    />
  );
};
