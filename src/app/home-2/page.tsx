"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { CommandMenu } from "./CommandMenu";
import { playlist, PlayList } from "./data/playlist";
import { imagelist, ImageList } from "./data/image";
import { list, List } from "./data/list";
import Carousel from "./components/Carousel";
import { InfiniteSlider } from "./components/core/infinite-slider";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  EllipsisVertical,
  Globe,
  Heart,
  House,
  ListPlus,
  Minus,
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
import React, { useEffect, useState, useRef } from "react";
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
import Autoplay from "embla-carousel-autoplay";
import { EmblaPluginType } from "embla-carousel";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useRouter } from "next/navigation";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { NavigationEffect } from "@/components/NavigationEffect";
// import { ToasterSonner } from "@/components/ui/sonner";
import { Dot } from "lucide-react";
import DownloadButton from "./components/DownloadButton";
import { BorderBeam } from "@/components/magicui/border-beam";
import Meteors from "@/components/magicui/meteors";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import TailwindcssButton from "@/components/ui/tailwindcss-buttons";

export default function Home() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [position, setPosition] = React.useState("benoit");
  const list_logo = [
    {
      icon: "windows11-logo",
      src: "windows11.svg",
    },
    {
      icon: "linux-logo",
      src: "linux.svg",
    },
    {
      icon: "spple-logo",
      src: "apple.svg",
    },
    {
      icon: "nextdotjs-logo",
      src: "nextdotjs.svg",
    },
    {
      icon: "react-logo",
      src: "react.svg",
    },
    {
      icon: "swc-logo",
      src: "swc.svg",
    },
    {
      icon: "framer-motion-logo",
      src: "framer.svg",
    },
    {
      icon: "type-script-logo",
      src: "typescript.svg",
    },
    {
      icon: "astro-logo",
      src: "astro.svg",
    },
    {
      icon: "shadcnui-logo",
      src: "shadcnui.svg",
    },
  ];
  return (
    <main className="GeistSans relative flex min-h-screen w-full flex-col items-center justify-between gap-[1rem] overflow-x-hidden py-[1rem] dark:bg-black dark:[color-scheme:dark]">
      <TailwindcssButton />
      <div className="mx-[5rem] mt-[1rem] flex h-[650px] w-[1200px] flex-col items-center gap-[2rem] rounded-lg border pt-4 min-[375px]:flex-col min-[645px]:flex-col xl:flex-col">
        <div className="rounded-lg border border-[#202020] px-3">
          <div className="flex items-center gap-[1rem]">
            <div className="flex items-center gap-[0.5rem]">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a
                    href="https://x.com/DeveloperPlus24"
                    className="flex items-center gap-[0.5rem]"
                  >
                    <Button
                      variant="ghost"
                      className="px-2 dark:hover:bg-[#161616]"
                      size="icon"
                    >
                      <Image
                        src="/x.svg"
                        width="50"
                        height="50"
                        alt="x-icon"
                        className="max-height-[50px] max-w-[50px] dark:invert-[1]"
                      />
                    </Button>
                    <p className="text-sm">Twitter</p>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-[16rem]" side="top">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        className="rounded-[0px] dark:invert-[1]"
                        src="/x.svg"
                      />
                      <AvatarFallback>IG</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@x</h4>
                      <p className="text-sm">Pham Quang Truong An</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined Jun 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="" className="flex items-center gap-[0.5rem]">
                    <Button
                      variant="ghost"
                      className="px-2 dark:hover:bg-[#161616]"
                      size="icon"
                    >
                      <Image
                        src="/instagram.svg"
                        width="50"
                        height="50"
                        alt="instagram-icon"
                        className="max-height-[50px] max-w-[50px] dark:invert-[1]"
                      />
                    </Button>
                    <p className="text-sm">Instagram</p>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-[16rem]" side="top">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        className="rounded-[0px] dark:invert-[1]"
                        src="/instagram.svg"
                      />
                      <AvatarFallback>IG</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@instagram</h4>
                      <p className="text-sm">Pham Quang Truong An</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined August 2024
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a
                    href="https://www.facebook.com/phamquangtruongan"
                    className="flex items-center gap-[0.5rem]"
                  >
                    <Button
                      variant="ghost"
                      className="px-2 dark:hover:bg-[#161616]"
                      size="icon"
                    >
                      <Image
                        src="/facebook.svg"
                        width="50"
                        height="50"
                        alt="youtube-icon"
                        className="max-height-[50px] max-w-[50px] dark:invert-[1]"
                      />
                    </Button>
                    <p className="text-sm">Facebook</p>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-[16rem]" side="top">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        className="rounded-[0px] dark:invert-[1]"
                        src="/facebook.svg"
                      />
                      <AvatarFallback>FB</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">@facebook</h4>
                      <p className="text-sm">Pham Quang Truong An</p>
                      <div className="flex items-center pt-2">
                        <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                        <span className="text-xs text-muted-foreground">
                          Joined December 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center gap-[2rem] self-start border-y bg-[#0c0c0c] px-[5rem] py-4">
          <h1 className="w-[700px] font-bold leading-[2.6rem] min-[375px]:text-center min-[375px]:text-[1.9rem] min-[645px]:text-center min-[645px]:text-[2rem] xl:text-center xl:text-[2.3rem]">
            Experience the Ultimate Music Journey with Our Innovative Software
          </h1>
          <p className="font-medium min-[375px]:w-[24rem] min-[375px]:text-center min-[375px]:text-[0.885rem] min-[645px]:text-center min-[645px]:text-[0.9rem] xl:w-[30rem] xl:text-center xl:text-[1rem]">
            Dive into a seamless music experience with our cutting-edge
            software. Unleash your creativity, manage your playlists, and
            explore a universe of sounds.
          </p>
        </div>
        <div className="flex w-full items-center justify-center border-b pb-[2rem]">
          <div className="flex flex-row gap-[2rem]">
            <Link
              className="flex items-center justify-center gap-3"
              href="/downloads"
            >
              <Button
                variant={"outline"}
                className="flex items-center bg-gradient-to-tr from-black/50 to-[#121212] hover:bg-accent dark:hover:bg-[#1a1a1a]"
              >
                <Image
                  src={"/windows11.svg"}
                  className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                  width={"16"}
                  height={"16"}
                  alt="window-logo"
                ></Image>
                Download For Windows
              </Button>
            </Link>
            <Link
              className="flex items-center justify-center gap-3"
              href="/downloads"
            >
              <Button
                variant={"outline"}
                className="flex items-center bg-gradient-to-tr from-black/50 to-[#121212] hover:bg-accent dark:hover:bg-[#1a1a1a]"
              >
                <Image
                  src={"/linux.svg"}
                  className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                  width={"16"}
                  height={"16"}
                  alt="window-logo"
                ></Image>
                Download For Linux
              </Button>
            </Link>
            <Link
              className="flex items-center justify-center gap-3"
              href="/downloads"
            >
              <Button
                variant={"outline"}
                className="flex items-center bg-gradient-to-tr from-black/50 to-[#121212] hover:bg-accent dark:hover:bg-[#1a1a1a]"
              >
                <Image
                  src={"/apple.svg"}
                  className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                  width={"16"}
                  height={"16"}
                  alt="window-logo"
                ></Image>
                Download For Mac
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex w-full items-center justify-center border-b py-[2rem]">
          <div className="w-[500px]">
            <InfiniteSlider gap={24} reverse>
              {list_logo.map((logo) => (
                <Image
                  key={logo.icon}
                  className="h-[40px] w-auto dark:invert-[1]"
                  src={`/${logo.src}`}
                  width="120"
                  height="120"
                  alt="logo"
                ></Image>
              ))}
            </InfiniteSlider>
          </div>
        </div>
      </div>
      <div
        className="contentsP min-[375px]:hidden min-[645px]:hidden xl:block"
        id="musicContent"
      >
        <div className="mb-[6rem] mt-[4rem] flex justify-center">
          <div className="flex h-[1020px] w-[1300px] flex-col rounded-lg border dark:border-[#202020]">
            <div className="flex gap-[2rem] rounded-t-lg border-b dark:border-b-[#202020] dark:bg-black">
              <Menubar className="rounded-t-lg border-none dark:bg-black">
                <MenubarMenu>
                  <MenubarTrigger>Flora</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>About Flora</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Preferences<MenubarShortcut>⌘,</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Hide Flora<MenubarShortcut>⇧⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Hide Other<MenubarShortcut>⌘H</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Quit Flora                   <MenubarShortcut>⌘Q</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>File</MenubarTrigger>
                  <MenubarContent>
                    <MenubarSub>
                      <MenubarSubTrigger>New</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Playlist</MenubarItem>
                        <MenubarItem>Playlist from Selection</MenubarItem>
                        <MenubarItem>Smart Playlist</MenubarItem>
                        <MenubarItem>Playlist Folder</MenubarItem>
                        <MenubarItem>Genius Playlist</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Open Stream Url<MenubarShortcut>⌘U</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarSub>
                      <MenubarSubTrigger>Libary</MenubarSubTrigger>
                      <MenubarSubContent>
                        <MenubarItem>Update Cloud Library</MenubarItem>
                        <MenubarItem>Update Genius</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Organize Library</MenubarItem>
                        <MenubarItem>Export Library</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Import Playlist</MenubarItem>
                        <MenubarItem>Export Playlist</MenubarItem>
                        <MenubarItem>Show Duplicate Items</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Get Album ArtWord</MenubarItem>
                        <MenubarItem>Get Track Name</MenubarItem>
                      </MenubarSubContent>
                    </MenubarSub>
                    <MenubarItem>
                      Import... <MenubarShortcut>⌘O</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Burn Playlist to Dis... </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Show in Finder
                      <MenubarShortcut>⇧⌘R</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>Convert...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>Page Setup</MenubarItem>
                    <MenubarItem>
                      Print
                      <MenubarShortcut>⌘P</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Edit</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem>
                      Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Cut <MenubarShortcut>⌘X</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Copy <MenubarShortcut>⌘C</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Paste <MenubarShortcut>⌘V</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Select All <MenubarShortcut>⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Deselect All<MenubarShortcut>⇧⌘A</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem>
                      Smart Distation{" "}
                      <MenubarShortcut>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                          <circle cx="17" cy="7" r="5" />
                        </svg>
                      </MenubarShortcut>
                    </MenubarItem>
                    <MenubarItem>
                      Emoji & Symbols{" "}
                      <MenubarShortcut>
                        {" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>View</MenubarTrigger>
                  <MenubarContent>
                    <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
                    <MenubarCheckboxItem checked>
                      Show Lyrics
                    </MenubarCheckboxItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Show Status Bar</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Enter Fullscreen</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Hide Sidebar</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                  <MenubarTrigger>Account</MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem inset>Switch Account</MenubarItem>
                    <MenubarSeparator />
                    <MenubarRadioGroup
                      defaultValue="benoit"
                      value={position}
                      onValueChange={setPosition}
                    >
                      <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
                      <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
                      <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
                    </MenubarRadioGroup>
                    <MenubarSeparator />
                    <MenubarItem inset>Manage Family...</MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem inset>Add Account...</MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="flex h-full w-full">
              <Tabs
                defaultValue="listennow_parent"
                className="flex w-full rounded-t-none rounded-bl-lg rounded-br-none"
              >
                <TabsList className="flex h-full w-[238px] flex-col justify-start gap-[1rem] rounded-t-none rounded-bl-lg rounded-br-none border-r bg-white pt-[24px] dark:border-r-[#202020] dark:bg-black">
                  <div>
                    <h1 className="flex w-[190px] items-center justify-start gap-[1rem] pl-[12px] text-xl font-bold dark:text-white">
                      Discorver
                    </h1>
                  </div>
                  <TabsTrigger
                    value="listennow_parent"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <CirclePlay className="h-4 w-4" />
                    <p className="text-md">Listen Now</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="browser_parent"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <LayoutGrid className="h-4 w-4" />
                    <p>Browser</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="radio_parent"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <Radio className="h-4 w-4" />
                    <p>Radio</p>
                  </TabsTrigger>
                  <div>
                    <h1 className="flex w-[190px] items-center justify-start gap-[1rem] pl-[12px] text-xl font-bold dark:text-white">
                      Library
                    </h1>
                  </div>
                  <TabsTrigger
                    value="playlist"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <ListMusic className="h-4 w-4" />
                    <p>Playlist</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="song"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <Music2 className="h-4 w-4" />
                    <p>Song</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="make_for_you"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <User className="h-4 w-4" />
                    <p>Make for You</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="artists"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                      <circle cx="17" cy="7" r="5"></circle>
                    </svg>
                    <p>Artists</p>
                  </TabsTrigger>
                  <TabsTrigger
                    value="albums"
                    className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                  >
                    <Library className="h-4 w-4" />
                    <p>Albums</p>
                  </TabsTrigger>
                  <div>
                    <h1 className="flex w-[190px] items-center justify-start gap-[1rem] pl-[12px] text-xl font-bold text-white">
                      Library
                    </h1>
                  </div>
                  <ScrollArea className="h-[310px] w-[230px] pl-[1rem]">
                    <div className="text-md flex flex-col gap-[1rem]">
                      {playlist.map((playlist: PlayList) => (
                        <TabsTrigger
                          key={playlist.id}
                          value={`${playlist.value}`}
                          className="-pl-[12px] flex w-[190px] items-center justify-start gap-[1rem]"
                        >
                          <ListMusic className="h-4 w-4" />
                          <p>{playlist.name}</p>
                        </TabsTrigger>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsList>
                <TabsContent value="listennow_parent" className="h-full w-full">
                  <div className="flex w-full flex-col">
                    <div className="mx-[2rem] mt-[1rem] flex justify-between">
                      <div className="">
                        <Tabs defaultValue="music" className="w-[400px]">
                          <TabsList>
                            <TabsTrigger value="music">Music</TabsTrigger>
                            <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
                            <TabsTrigger value="live">Live</TabsTrigger>
                          </TabsList>
                          <TabsContent value="music">
                            <div className="mt-[2rem]">
                              <div className="">
                                <h1 className="text-2xl font-bold">
                                  Listen Now
                                </h1>
                                <p className="text-sm text-[#a1a1a1]">
                                  Top picks for you. Updated daily.
                                </p>
                              </div>
                              <div>
                                <ScrollArea className="mt-[2rem] h-[450px] w-[1000px] border-t pt-[2rem] dark:border-t-[#202020]">
                                  <div className="flex gap-[3rem]">
                                    {list.slice(0, 4).map((list: List) => (
                                      <div key={list.id}>
                                        <ContextMenu>
                                          <ContextMenuTrigger>
                                            <Image
                                              src={`/image/${list.src}`}
                                              alt="Picture of the author"
                                              width={1300}
                                              height={1200}
                                              className="h-[350px] max-w-[255px] rounded-lg"
                                            />
                                          </ContextMenuTrigger>
                                          <ContextMenuContent className="w-[11rem]">
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Add to Library
                                            </ContextMenuItem>
                                            <ContextMenuSub>
                                              <ContextMenuSubTrigger
                                                inset
                                                className="pl-[8px]"
                                              >
                                                Add to Playlist
                                              </ContextMenuSubTrigger>
                                              <ContextMenuSubContent className="w-48">
                                                <ContextMenuItem>
                                                  <CirclePlus className="mr-2 h-4 w-4" />
                                                  New Playlist{" "}
                                                </ContextMenuItem>
                                                <ContextMenuSeparator />
                                                {playlist.map(
                                                  (playlist: PlayList) => (
                                                    <ContextMenuItem
                                                      key={playlist.id}
                                                    >
                                                      <ListMusic className="mr-2 h-4 w-4" />
                                                      {playlist.name}
                                                    </ContextMenuItem>
                                                  ),
                                                )}
                                              </ContextMenuSubContent>
                                            </ContextMenuSub>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play Next
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play After
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Create Station
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Like
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Share
                                            </ContextMenuItem>
                                          </ContextMenuContent>
                                        </ContextMenu>
                                        <div key={list.id}>
                                          <p className="mt-[0.5rem] text-sm">
                                            {list.title}
                                          </p>
                                          <p className="text-xs text-[#a1a1a1]">
                                            {list.artist}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            </div>
                            <div className="mt-[2rem]">
                              <div className="">
                                <h1 className="text-2xl font-bold">
                                  Make for You
                                </h1>
                                <p className="text-sm text-[#a1a1a1]">
                                  Your personal playlists. Updated daily.
                                </p>
                              </div>
                              <div>
                                <ScrollArea className="mt-[2rem] w-[1000px] border-t pt-[2rem] dark:border-t-[#202020]">
                                  <div className="flex gap-[1.8rem]">
                                    {list.slice(4).map((list: List) => (
                                      <div key={list.id}>
                                        <ContextMenu>
                                          <ContextMenuTrigger>
                                            <Image
                                              src={`/image/${list.src}`}
                                              alt="Picture of the author"
                                              width={1300}
                                              height={1200}
                                              className="h-[150px] w-[150px] rounded-lg"
                                            />
                                          </ContextMenuTrigger>
                                          <ContextMenuContent className="w-[11rem]">
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Add to Library
                                            </ContextMenuItem>
                                            <ContextMenuSub>
                                              <ContextMenuSubTrigger
                                                inset
                                                className="pl-[8px]"
                                              >
                                                Add to Playlist
                                              </ContextMenuSubTrigger>
                                              <ContextMenuSubContent className="w-48">
                                                <ContextMenuItem>
                                                  <CirclePlus className="mr-2 h-4 w-4" />
                                                  New Playlist{" "}
                                                </ContextMenuItem>
                                                <ContextMenuSeparator />
                                                {playlist.map(
                                                  (playlist: PlayList) => (
                                                    <ContextMenuItem
                                                      key={playlist.id}
                                                    >
                                                      <ListMusic className="mr-2 h-4 w-4" />
                                                      {playlist.name}
                                                    </ContextMenuItem>
                                                  ),
                                                )}
                                              </ContextMenuSubContent>
                                            </ContextMenuSub>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play Next
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Play After
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Create Station
                                            </ContextMenuItem>
                                            <ContextMenuSeparator />
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Like
                                            </ContextMenuItem>
                                            <ContextMenuItem
                                              inset
                                              className="pl-[8px]"
                                            >
                                              Share
                                            </ContextMenuItem>
                                          </ContextMenuContent>
                                        </ContextMenu>
                                        <p className="mt-[0.5rem] text-sm">
                                          {list.title}
                                        </p>
                                        <p className="text-xs text-[#a1a1a1]">
                                          {list.artist}
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <ScrollBar orientation="horizontal" />
                                </ScrollArea>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="podcasts">
                            Change your password here.
                          </TabsContent>
                          <TabsContent value="live">
                            Change your password here.
                          </TabsContent>
                        </Tabs>
                      </div>
                      <div>
                        <Button>
                          <CirclePlus className="mr-2 h-4 w-4" /> Add Music
                        </Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent
                  value="browser_parent"
                  className="mt-0 h-full w-full"
                >
                  <div className="flex h-full w-full items-center">
                    <Tabs
                      defaultValue="all"
                      className="flex h-full w-full flex-col pt-[2rem]"
                    >
                      <TabsList className="ml-[33px] w-fit">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="united_state">
                          United State
                        </TabsTrigger>
                        <TabsTrigger value="on_world">On World</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all" className="h-full w-full">
                        <div className="flex h-full w-full flex-col justify-between gap-[1rem]">
                          <ScrollArea className="mt-[1rem] h-[800px]">
                            <div>
                              <h1 className="ml-[33px] text-xl font-bold">
                                New Releases
                              </h1>
                              <div className="ml-[33px] mt-[1rem] grid w-[970px] grid-cols-3 gap-x-[2rem] gap-y-[2rem]">
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h1 className="ml-[33px] mt-[1rem] text-xl font-bold">
                                New Releases
                              </h1>
                              <div className="ml-[33px] mt-[1rem] grid w-[970px] grid-cols-3 gap-x-[2rem] gap-y-[2rem]">
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h1 className="ml-[33px] mt-[1rem] text-xl font-bold">
                                New Releases
                              </h1>
                              <div className="ml-[33px] mt-[1rem] grid w-[970px] grid-cols-3 gap-x-[2rem] gap-y-[2rem]">
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4">
                                  <Skeleton className="h-[100px] w-[100px]"></Skeleton>
                                  <div className="flex h-[100px] flex-col justify-between">
                                    <Skeleton className="h-[2rem] w-[12rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[8rem]"></Skeleton>
                                    <Skeleton className="h-[1rem] w-[5rem]"></Skeleton>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </ScrollArea>
                          <div className="flex h-[70px] w-full items-center justify-center border-t dark:border-t-[#202020]">
                            <div className="flex gap-[2rem]">
                              <SkipBack />
                              <PlayCircle />
                              <SkipForward />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </div>
                </TabsContent>
                <TabsContent value="radio_parent">
                  <div className="flex w-full flex-col">aa</div>
                </TabsContent>
                <TabsContent value="recently_added">
                  <div className="flex w-full flex-col"></div>
                </TabsContent>
                <TabsContent value="playlist" className="mt-0 h-full w-full">
                  <div className="h-full w-full">
                    <Tabs
                      defaultValue="gio_list"
                      className="flex h-full w-full flex-col justify-between"
                    >
                      <TabsContent
                        value="gio_list"
                        className="mt-0 flex h-full w-full items-center justify-center"
                      >
                        <div className="flex flex-col gap-[2rem]">
                          <Image
                            width={400}
                            height={300}
                            alt="Gio_Cover_Image"
                            src="/1678963583887_500.jpg"
                            className="h-[300px] w-[300px] rounded-md"
                          />
                          <div className="flex justify-between">
                            <SkipBack />
                            <Play />
                            <SkipForward />
                          </div>
                        </div>
                      </TabsContent>
                      <TabsList className="h-[300px] w-full p-0 dark:bg-black">
                        <ScrollArea className="h-[300px] w-full border-t py-[1rem] dark:border-t-[#202020]">
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full flex-col items-center gap-[3rem]"
                          >
                            <div className="flex h-[80px] w-[1000px] items-center justify-between rounded-sm px-[2rem] dark:border-[#202020]">
                              <div className="flex items-center gap-[2rem]">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="h-[4rem] w-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="text-md font-bold">Gio</h1>
                                  <p className="text-sm text-[#a1a1a1]">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full flex-col items-center gap-[3rem]"
                          >
                            <div className="flex h-[80px] w-[1000px] items-center justify-between rounded-sm px-[2rem] dark:border-[#202020]">
                              <div className="flex items-center gap-[2rem]">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="h-[4rem] w-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="text-md font-bold">Gio</h1>
                                  <p className="text-sm text-[#a1a1a1]">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full flex-col items-center gap-[3rem]"
                          >
                            <div className="flex h-[80px] w-[1000px] items-center justify-between rounded-sm border-[#202020] px-[2rem]">
                              <div className="flex items-center gap-[2rem]">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="h-[4rem] w-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="text-md font-bold">Gio</h1>
                                  <p className="text-sm text-[#a1a1a1]">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                          <TabsTrigger
                            value="gio_list"
                            className="flex w-full flex-col items-center gap-[3rem]"
                          >
                            <div className="flex h-[80px] w-[1000px] items-center justify-between rounded-sm border-[#202020] px-[2rem]">
                              <div className="flex items-center gap-[2rem]">
                                <Image
                                  width={400}
                                  height={300}
                                  alt="Gio_Cover_Image"
                                  src="/1678963583887_500.jpg"
                                  className="h-[4rem] w-[4rem] rounded-full"
                                />
                                <div className="flex flex-col">
                                  <h1 className="text-md font-bold">Gio</h1>
                                  <p className="text-sm text-[#a1a1a1]">Jank</p>
                                </div>
                              </div>
                              <div className="flex gap-[2rem]">
                                <EllipsisVertical className="text-[#acacac]" />
                              </div>
                            </div>
                          </TabsTrigger>
                        </ScrollArea>
                      </TabsList>
                    </Tabs>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-[5rem]"> </div>
    </main>
  );
}
