"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  RocketIcon,
  StickyNote,
  Sun,
  Moon,
  Monitor,
} from "lucide-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useTheme } from "next-themes";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { useCommandState } from "cmdk";
export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const SubItem = (
    props: React.JSX.IntrinsicAttributes &
      Omit<
        { children?: React.ReactNode } & Omit<
          Pick<
            Pick<
              React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLDivElement>,
                HTMLDivElement
              >,
              "key" | keyof React.HTMLAttributes<HTMLDivElement>
            > & { ref?: React.Ref<HTMLDivElement> } & { asChild?: boolean },
            "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"
          >,
          "onSelect" | "disabled" | "value"
        > & {
            disabled?: boolean;
            onSelect?: (value: string) => void;
            value?: string;
            keywords?: string[];
            forceMount?: boolean;
          } & React.RefAttributes<HTMLDivElement>,
        "ref"
      > &
      React.RefAttributes<HTMLDivElement>
  ) => {
    const search = useCommandState((state) => state.search);
    if (!search) return null;
    return <CommandItem {...props} />;
  };

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        onClick={() => setOpen((open) => !open)}
        className="cursor-pointer border p-2 flex gap-4 group hover:bg-muted transition-all duration-200 ease-out items-center justify-between h-[36px] w-[300px] rounded-md"
      >
        <div className="gap-4 flex items-center text-[#7c7c7c] dark:group-hover:text-white transition-all duration-200 ease-out ">
          <MagnifyingGlassIcon width="21" height="21" />
          <p className="text-[1rem] select-none">Search documetion...</p>
        </div>
        <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="custom_command_scroll h-[500px] ">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Link">
            <CommandItem
              onSelect={() => {
                router.push("/");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Home</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Docs</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/pricing");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Pricing</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/resources");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Resources</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/enterprise");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Enterprise</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Play Now</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/docs");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Download</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/chat");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>Chat</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                router.push("/webfilm");
                setOpen((open) => !open);
              }}
            >
              <StickyNote className="mr-2 h-4 w-4" />
              <span>WebFilm</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen((open) => !open);
              }}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen((open) => !open);
              }}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen((open) => !open);
              }}
            >
              <Monitor className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
