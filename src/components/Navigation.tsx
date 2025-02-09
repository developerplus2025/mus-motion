"use client";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
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
import { useTheme } from "next-themes";
import ShinyButton from "@/components/magicui/shiny-button";
import ShineBorder from "@/components/magicui/shine-border";
import Sparkles from "./Sparkles";
import GitHub from "./GitHub";
import Discord from "./Discord";
import X from "./x";
import Linkedin from "./Linkedin";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import PopoverNotifications from "./popover-notifications";
import TextHoverEnter from "./TextHoverEnter";
import FeedBack from "./feedback";
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
export const Navigation = (): JSX.Element => {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pathname = usePathname();
  const isWebfilmPath = pathname === "/webfilm";
  const isWebAppPath = pathname === "/webapp";
  const isDocsPath = pathname === "/docs";
  const isAi = pathname === "/ai";
  const isChatV2 = pathname === "/chat-v2";
  const isHelp = pathname === "/help";
  const isDocs = pathname === "/docs";
  const isGuides = pathname === "/guides";
  const isSignIn = pathname === "/signin";
  const isCreative = pathname === "/creative";
  const isGeneration = pathname === "/generation";
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 60 ||
          window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight,
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        isWebfilmPath ||
        isWebAppPath ||
        isAi ||
        isChatV2 ||
        isSignIn ||
        isGuides ||
        isDocs ||
        isHelp || pathname.startsWith("/docs")
          ? "webfilm-class"
          : ""
      } sticky top-0 z-[20]`}
    >
      <nav className="relative z-[4] flex-shrink-0 items-center justify-center min-[375px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${isScrolled || isBottom ? "border-b bg-[#0c0c0c]" : ""} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : ""} relative z-[1] flex w-full items-center justify-between gap-[2rem] bg-white px-[2rem] dark:border-[#202020] dark:bg-[#000000]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-[1rem] text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                Stroma VF
              </Link>
              <Link
                href="/"
                className="rounded-full border px-4 py-1 text-xs font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                v10.9.5
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="font-medium">
                <NavigationMenuItem>
                  <Link href="/creative" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/creative"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/creative"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Creative
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/pricing"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/pricing"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Pricing
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/docs"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Docs
                      {pathname != "/docs" && (
                        <sup>
                          <svg
                            data-testid="geist-icon"
                            height={12}
                            strokeLinejoin="round"
                            viewBox="0 0 15 15"
                            width={12}
                            style={{ color: "currentcolor" }}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                              fill="currentColor"
                            />
                          </svg>
                        </sup>
                      )}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/radio" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/radio"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      Radio
                      <sup>
                        <svg
                          data-testid="geist-icon"
                          height={12}
                          strokeLinejoin="round"
                          viewBox="0 0 15 15"
                          width={12}
                          style={{ color: "currentcolor" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                            fill="currentColor"
                          />
                        </svg>
                      </sup>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/community" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/community"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/community"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Community
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <Link href="/aboutus" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/aboutus"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem> */}
                <NavigationMenuItem>
                  <Link href="/generation" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/generation"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } ${
                        pathname === "/docs" ||
                        pathname === "/help" ||
                        pathname === "/guides"
                          ? "hidden"
                          : ""
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      <TextHoverEnter
                        className={`${
                          pathname === "/generation"
                            ? "dark:text-white"
                            : "dark:text-[#9b9b9b]"
                        }`}
                      >
                        Generation
                      </TextHoverEnter>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1320px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-[1rem]">
            {/* <div className="flex items-center justify-center gap-[1rem]">
              <LinkPreview
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://github.com/devplus2024"
                isStatic
                imageSrc="/Opera Snapshot_2024-10-31_172630_github.com.png"
              >
                <GitHub />
                <span className="text-sm">Github</span>
              </LinkPreview>
              <LinkPreview
                imageSrc="/Opera Snapshot_2024-10-31_172414_x.com.png"
                isStatic
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://x.com/DeveloperPlus24"
              >
                <X />
                <span className="text-sm">Twitter</span>
              </LinkPreview>
            </div> */}
            <div className="h-[1.2rem] border-r"></div>
            <motion.div
              initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
              animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-2"
            >
              {/* <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <X />
              </div> */}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
                  >
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                      style={{ color: "currentcolor" }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.46968 1.46968C10.1433 -0.203925 12.8567 -0.203923 14.5303 1.46968C16.2039 3.14329 16.2039 5.85674 14.5303 7.53034L12.0303 10.0303L10.9697 8.96968L13.4697 6.46968C14.5575 5.38186 14.5575 3.61816 13.4697 2.53034C12.3819 1.44252 10.6182 1.44252 9.53034 2.53034L7.03034 5.03034L5.96968 3.96968L8.46968 1.46968ZM11.5303 5.53034L5.53034 11.5303L4.46968 10.4697L10.4697 4.46968L11.5303 5.53034ZM1.46968 14.5303C3.14329 16.2039 5.85673 16.204 7.53034 14.5303L10.0303 12.0303L8.96968 10.9697L6.46968 13.4697C5.38186 14.5575 3.61816 14.5575 2.53034 13.4697C1.44252 12.3819 1.44252 10.6182 2.53034 9.53034L5.03034 7.03034L3.96968 5.96968L1.46968 8.46968C-0.203923 10.1433 -0.203925 12.8567 1.46968 14.5303Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[9rem]">
                  <DropdownMenuLabel className="text-center">
                    Social Media
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup style={{ display: "flex" }}>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <GitHub />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <X />
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <g clipPath="url(#clip0_872_3152)">
                          <path
                            d="M3.42681 10.0787C3.42681 10.9984 2.68351 11.7417 1.76382 11.7417C0.844137 11.7417 0.10083 10.9984 0.10083 10.0787C0.10083 9.15906 0.844137 8.41575 1.76382 8.41575H3.42681V10.0787ZM4.25831 10.0787C4.25831 9.15906 5.00162 8.41575 5.9213 8.41575C6.84099 8.41575 7.58429 9.15906 7.58429 10.0787V14.2362C7.58429 15.1559 6.84099 15.8992 5.9213 15.8992C5.00162 15.8992 4.25831 15.1559 4.25831 14.2362V10.0787Z"
                            fill="currentColor"
                          />
                          <path
                            d="M5.92121 3.40158C5.00152 3.40158 4.25821 2.65827 4.25821 1.73858C4.25821 0.818899 5.00152 0.075592 5.92121 0.075592C6.84089 0.075592 7.5842 0.818899 7.5842 1.73858V3.40158H5.92121ZM5.92121 4.24567C6.84089 4.24567 7.5842 4.98898 7.5842 5.90866C7.5842 6.82835 6.84089 7.57165 5.92121 7.57165H1.75113C0.831442 7.57165 0.0881348 6.82835 0.0881348 5.90866C0.0881348 4.98898 0.831442 4.24567 1.75113 4.24567H5.92121Z"
                            fill="currentColor"
                          />
                          <path
                            d="M12.5858 5.90866C12.5858 4.98898 13.3291 4.24567 14.2488 4.24567C15.1685 4.24567 15.9118 4.98898 15.9118 5.90866C15.9118 6.82835 15.1685 7.57165 14.2488 7.57165H12.5858V5.90866ZM11.7543 5.90866C11.7543 6.82835 11.011 7.57165 10.0913 7.57165C9.17165 7.57165 8.42834 6.82835 8.42834 5.90866V1.73858C8.42834 0.818899 9.17165 0.075592 10.0913 0.075592C11.011 0.075592 11.7543 0.818899 11.7543 1.73858V5.90866Z"
                            fill="currentColor"
                          />
                          <path
                            d="M10.0913 12.5732C11.011 12.5732 11.7543 13.3165 11.7543 14.2362C11.7543 15.1559 11.011 15.8992 10.0913 15.8992C9.17165 15.8992 8.42834 15.1559 8.42834 14.2362V12.5732H10.0913ZM10.0913 11.7417C9.17165 11.7417 8.42834 10.9984 8.42834 10.0787C8.42834 9.15906 9.17165 8.41575 10.0913 8.41575H14.2614C15.1811 8.41575 15.9244 9.15906 15.9244 10.0787C15.9244 10.9984 15.1811 11.7417 14.2614 11.7417H10.0913Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_872_3152">
                            <rect width={16} height={16} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-4 text-xs">
                      <svg
                        data-testid="geist-icon"
                        height={16}
                        strokeLinejoin="round"
                        viewBox="0 0 16 16"
                        width={16}
                        style={{ color: "currentcolor" }}
                      >
                        <g clipPath="url(#clip0_3908_2369)">
                          <path
                            d="M15.5273 6.68664L15.5054 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1676 0.836175C13.0689 0.774904 12.9538 0.745394 12.8378 0.751629C12.7218 0.757865 12.6105 0.799545 12.5189 0.871043C12.4284 0.944593 12.3627 1.04426 12.3308 1.15647L10.8996 5.53519H5.10431L3.67312 1.15647C3.64208 1.04365 3.57625 0.943483 3.485 0.870232C3.39343 0.798734 3.28213 0.757054 3.16613 0.750818C3.05012 0.744583 2.935 0.774093 2.8363 0.835364C2.73788 0.897946 2.66158 0.989838 2.61817 1.09809L0.49449 6.62744L0.473407 6.68339C0.168277 7.48065 0.130614 8.3555 0.366096 9.17603C0.601578 9.99656 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2519L5.03458 13.6699L6.632 14.8789L7.60505 15.6136C7.71887 15.7 7.85785 15.7468 8.00076 15.7468C8.14366 15.7468 8.28264 15.7 8.39646 15.6136L9.36951 14.8789L10.9669 13.6699L14.2153 11.2373L14.2234 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8683 8.35673 15.8312 7.48313 15.5273 6.68664Z"
                            fill="white"
                            style={{ fill: "white", fillOpacity: 1 }}
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_3908_2369">
                            <rect
                              width={16}
                              height={16}
                              fill="white"
                              style={{ fill: "white", fillOpacity: 1 }}
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <PopoverNotifications />
              <ThemeToggle />
              {/* <CommandMenu /> */}
              <FeedBack />
            </motion.div>
            <div className="flex items-center gap-[1rem]">
              <Link
                className="flex items-center justify-center gap-3"
                href="/signin"
              >
                <motion.div
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Button
                    variant={"outline"}
                    className="flex h-fit items-center px-3 py-1 hover:bg-accent dark:hover:bg-[#1a1a1a]"
                  >
                    {/* <Image
                      src={"/windows11.svg"}
                      className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                      width={"16"}
                      height={"16"}
                      alt="window-logo"
                    ></Image> */}
                    {/* Install */}
                    Sign In
                  </Button>
                </motion.div>
              </Link>
              <Link href="/ai">
                <motion.div
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Button  className="h-fit [&_svg]:size-2 gap-1 px-3 py-1">
                  Sign Up
                  <svg
  data-testid="geist-icon"
  height={12}
  strokeLinejoin="round"
  viewBox="0 0 16 16"
  width={12}
  style={{ color: "currentcolor" }}
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M5.50001 1.93933L6.03034 2.46966L10.8536 7.29288C11.2441 7.68341 11.2441 8.31657 10.8536 8.7071L6.03034 13.5303L5.50001 14.0607L4.43935 13L4.96968 12.4697L9.43935 7.99999L4.96968 3.53032L4.43935 2.99999L5.50001 1.93933Z"
    fill="currentColor"
  />
</svg>

                    {/* <Sparkles />
                    Ask Ai */}
                   
                  </Button>
                </motion.div>
              </Link>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[3] rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
};
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
