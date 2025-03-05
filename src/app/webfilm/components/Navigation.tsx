"use client";
import classNames from "classnames";
import {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { Toaster, toast } from "sonner";
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
import { useRouter } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { CommandMenu } from "./CommandMenu";
import LogoImage from "./LogoImage";
import { ThemeToggle } from "./mode-toggle";
import { DropdownMenuUser } from "./drop-menu-user";
export const Navigation = (): JSX.Element => {
  return (
    <div className="sticky top-0 z-[20]">
      <nav className="relative z-[1] flex w-full items-center justify-between gap-[2rem] border-b bg-white px-[2rem] dark:border-[#202020] dark:bg-[#000000]">
        <div className="flex h-[66px] w-fit items-center gap-[2rem] text-sm">
          <Link
            href="/"
            className="text-[1.5rem] transition-colors duration-300 ease-out dark:text-white"
          >
            <p className="font-bold">WebFilm</p>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuIndicator className="" />
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className="relative flex h-7 cursor-pointer select-none items-center rounded-full px-3 text-[1rem] transition-colors duration-300 ease-out dark:text-[#9b9b9b] dark:hover:text-white">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="relative flex h-7 cursor-pointer select-none items-center rounded-full px-3 text-[1rem] transition-colors duration-300 ease-out dark:text-[#9b9b9b] dark:hover:text-white">
                    Movies
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/resources" legacyBehavior passHref>
                  <NavigationMenuLink className="relative flex h-7 cursor-pointer select-none items-center rounded-full px-3 text-[1rem] transition-colors duration-300 ease-out dark:text-[#9b9b9b] dark:hover:text-white">
                    TV Shows
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/enterprise" legacyBehavior passHref>
                  <NavigationMenuLink className="relative flex h-7 cursor-pointer select-none items-center rounded-full px-3 text-[1rem] transition-colors duration-300 ease-out dark:text-[#9b9b9b] dark:hover:text-white">
                    Recently Added
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/enterprise" legacyBehavior passHref>
                  <NavigationMenuLink className="relative flex h-7 cursor-pointer select-none items-center rounded-full px-3 text-[1rem] transition-colors duration-300 ease-out dark:text-[#9b9b9b] dark:hover:text-white">
                    My List
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-[2rem]">
          <CommandMenu />
          <div className="flex items-center gap-[1rem]">
            <ThemeToggle />
            <DropdownMenuUser />
          </div>
        </div>
      </nav>
    </div>
  );
};
