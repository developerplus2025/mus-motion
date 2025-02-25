import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  Ellipsis,
  EllipsisVertical,
  House,
  Icon,
  Phone,
  Play,
  PlayCircle,
  Plus,
  Podcast,
  Send,
  SkipBack,
  SkipForward,
  Smile,
  User2,
  UserRound,
  VideoIcon,
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
import React, { useEffect, useState } from "react";
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
import { ThemeMode } from "./ThemeMode";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
export default function Home() {
  return (
    <main className="flex h-[calc(100vh-58px)] items-center justify-center dark:bg-black">
      <Tabs
        defaultValue="sofia_davis"
        className="flex h-[560px] w-[1000px] rounded-lg border dark:border-[#202020]"
      >
        <TabsList className="flex h-full w-[310px] flex-col justify-start rounded-br-none rounded-tr-none border-r bg-white dark:border-r-[#202020] dark:bg-black">
          <div className="flex w-full flex-col">
            <div className="flex w-full justify-between px-[1rem] pt-[1rem]">
              <p className="dark:text-white">Chats</p>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis className="dark:text-white" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="right-0">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>New Chats</DropdownMenuItem>
                    <DropdownMenuItem>Setting</DropdownMenuItem>
                    <DropdownMenuItem>Help</DropdownMenuItem>
                    <DropdownMenuItem className="dark:hover:bg-black">
                      <ThemeMode />
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="mt-[1rem] w-full px-[1rem]">
              <Input placeholder="Search" />
            </div>
          </div>
          <ScrollArea className="my-[18px] h-full w-full pr-[0.5rem]">
            <div className="flex w-full flex-col items-start gap-[0.7rem] px-[1rem]">
              <TabsTrigger
                value="sofia_davis"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Sofia Davis</p>
                  <p className="text-xs">Hey, how&apos;s it going? 🙂.</p>
                  <p className="text-xs">2h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="alex_johnson"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Alex Johnson</p>
                  <p className="text-xs">Did you see the new update? 🤖.</p>
                  <p className="text-xs">2h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="maria_gonzalez"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Maria Gonzalez</p>
                  <p className="text-xs">Excited for the weekend! 🎉.</p>
                  <p className="text-xs">2h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="kevin_brown"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Kevin Brown</p>
                  <p className="break-words text-xs">
                    Who&apos;s up for a movie night?...
                  </p>
                  <p className="text-xs">3h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="lily_white"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Lily White</p>
                  <p className="text-xs">Morning coffee is the best! ☕.</p>
                  <p className="text-xs">2h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="john_paul"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">John Paul</p>
                  <p className="text-xs">What are you up to? 🤔</p>
                  <p className="text-xs">4h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="mary_jane"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Mary Jane</p>
                  <p className="text-xs">Can&apos;t wait to see you! ❤️</p>
                  <p className="text-xs">5h</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="anna_belle"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="border-dark:[#202020] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Anna Belle</p>
                  <p className="text-xs">Let&apos;s catch up over lunch! 🍽️</p>
                  <p className="text-xs">2d</p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="mark_allen"
                className="flex w-full justify-start gap-[1rem] data-[state=active]:bg-muted dark:data-[state=active]:bg-[#101010]"
              >
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div className="flex flex-col items-start">
                  <p className="text-sm">Mark Allen</p>
                  <p className="text-xs">Hope you&apos;re doing well! 🌼</p>
                  <p className="text-xs">2h</p>
                </div>
              </TabsTrigger>
            </div>
          </ScrollArea>
        </TabsList>
        <TabsContent value="sofia_davis" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="alex_johnson" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="maria_gonzalez" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="kevin_brown" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="lily_white" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="john_paul" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mary_jane" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="anna_belle" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="mark_allen" className="mt-0 w-full">
          <div className="flex h-full w-full flex-col justify-between">
            <div className="flex h-[80px] w-full items-center justify-between border-b px-[2rem] dark:border-b-[#202020]">
              <div className="flex items-center gap-[1rem]">
                <div className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full border dark:border-[#202020]">
                  <User2 />
                </div>
                <div>
                  <h1 className="text-sm">Sofia Davis</h1>
                  <p className="text-xs text-[#a1a1a1]">Active 2h ago</p>
                </div>
              </div>
              <div className="flex items-center gap-[2rem]">
                <Phone className="h-[1.2rem] w-[1.2rem]" />
                <VideoIcon className="h-[1.2rem] w-[1.2rem]" />
                <Plus className="h-[1.2rem] w-[1.2rem]" />
              </div>
            </div>
            <ScrollArea className="my-[1rem] h-full w-full px-[0.5rem]">
              <div className="h-full w-full">
                <div className="grid gap-4 p-3" data-id={66}>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Hey, how&apos;s it going? We should catch up sometime soon.
                    🙏
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    I&apos;m doing great! I&apos;m free this weekend if you want
                    to grab a coffee.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    Sounds good! Let&apos;s meet at the Starbucks on 5th Ave.
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    I&apos;ll message you on Saturday.
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={67}
                  >
                    Looking forward to it! It&apos;s been a while. 😊
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={68}
                  >
                    Absolutely! Saturday morning works well. What time suits you
                    best? ⏰
                  </div>
                  <div
                    className="ml-auto flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground"
                    data-id={71}
                  >
                    How about 10 AM?
                  </div>
                  <div
                    className="flex w-max max-w-[65%] flex-col gap-2 rounded-full bg-muted px-4 py-2 text-sm dark:bg-[--chat]"
                    data-id={72}
                  >
                    Perfect! See you then! 👍
                  </div>
                </div>
              </div>
            </ScrollArea>
            <div className="flex h-[80px] w-full items-center justify-center gap-[2rem] border-t dark:border-t-[#202020]">
              <div>
                <Input className="w-[25rem]" />
              </div>
              <div className="flex gap-[1rem]">
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md bg-primary text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  type="submit"
                  data-id={76}
                >
                  <svg
                    data-id={77}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                  <span className="sr-only" data-id={78}>
                    Send
                  </span>
                </button>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={79}
                >
                  <svg
                    data-id={80}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1={9} x2="9.01" y1={9} y2={9} />
                    <line x1={15} x2="15.01" y1={9} y2={9} />
                  </svg>
                  <span className="sr-only" data-id={81}>
                    Add emoji
                  </span>
                </button>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                  data-id={82}
                >
                  <svg
                    data-id={83}
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
                    <circle cx={9} cy={9} r={2} />
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                  </svg>
                  <span className="sr-only" data-id={84}>
                    Add image
                  </span>
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}
