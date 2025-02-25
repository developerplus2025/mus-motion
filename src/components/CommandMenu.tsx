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
  MoonIcon,
  SunIcon,
  FileTextIcon,
  LaptopIcon,
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
      React.RefAttributes<HTMLDivElement>,
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
  const docsTitle = [
    {
      id: "1",
      name: "Home",
      src: "/",
      shortcut: "⇧⌘H",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 6.56062L8.00001 2.06062L3.50001 6.56062V13.5L6.00001 13.5V11C6.00001 9.89539 6.89544 8.99996 8.00001 8.99996C9.10458 8.99996 10 9.89539 10 11V13.5L12.5 13.5V6.56062ZM13.78 5.71933L8.70711 0.646409C8.31659 0.255886 7.68342 0.255883 7.2929 0.646409L2.21987 5.71944C2.21974 5.71957 2.21961 5.7197 2.21949 5.71982L0.469676 7.46963L-0.0606537 7.99996L1.00001 9.06062L1.53034 8.53029L2.00001 8.06062V14.25V15H2.75001L6.00001 15H7.50001H8.50001H10L13.25 15H14V14.25V8.06062L14.4697 8.53029L15 9.06062L16.0607 7.99996L15.5303 7.46963L13.7806 5.71993C13.7804 5.71973 13.7802 5.71953 13.78 5.71933ZM8.50001 11V13.5H7.50001V11C7.50001 10.7238 7.72386 10.5 8.00001 10.5C8.27615 10.5 8.50001 10.7238 8.50001 11Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "2",
      name: "Browse",
      src: "browse",
      shortcut: "⇧⌘B",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 5.5V2.5H5.5V5.5H2.5ZM1 2C1 1.44772 1.44772 1 2 1H6C6.55228 1 7 1.44772 7 2V6C7 6.55228 6.55228 7 6 7H2C1.44772 7 1 6.55228 1 6V2ZM2.5 13.5V10.5H5.5V13.5H2.5ZM1 10C1 9.44772 1.44772 9 2 9H6C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15H2C1.44772 15 1 14.5523 1 14V10ZM10.5 2.5V5.5H13.5V2.5H10.5ZM10 1C9.44772 1 9 1.44772 9 2V6C9 6.55228 9.44772 7 10 7H14C14.5523 7 15 6.55228 15 6V2C15 1.44772 14.5523 1 14 1H10ZM10.5 13.5V10.5H13.5V13.5H10.5ZM9 10C9 9.44772 9.44772 9 10 9H14C14.5523 9 15 9.44772 15 10V14C15 14.5523 14.5523 15 14 15H10C9.44772 15 9 14.5523 9 14V10Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "3",
      name: "Pricing",
      src: "pricing",
      shortcut: "⌘P",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.62499 3.375V4V4.375H9C10.1736 4.375 11.125 5.3264 11.125 6.5H9.875C9.875 6.01675 9.48325 5.625 9 5.625H8.62499V7.375H9C10.1736 7.375 11.125 8.3264 11.125 9.5C11.125 10.6736 10.1736 11.625 9 11.625H8.62499V12V12.625H7.37499V12V11.625H7C5.8264 11.625 4.875 10.6736 4.875 9.5H6.125C6.125 9.98325 6.51675 10.375 7 10.375H7.37499V8.625H7C5.8264 8.625 4.875 7.6736 4.875 6.5C4.875 5.3264 5.8264 4.375 7 4.375H7.37499V4V3.375H8.62499ZM7.37499 5.625H7C6.51675 5.625 6.125 6.01675 6.125 6.5C6.125 6.98325 6.51675 7.375 7 7.375H7.37499V5.625ZM8.62499 8.625V10.375H9C9.48325 10.375 9.875 9.98325 9.875 9.5C9.875 9.01675 9.48325 8.625 9 8.625H8.62499Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "4",
      name: "Docs",
      src: "docs",
      shortcut: "⌘D",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "5",
      name: "Radio",
      src: "radio",
      shortcut: "⇧⌘R",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 2.5C7.90356 2.5 13.5 8.09644 13.5 15H15C15 7.26801 8.73199 1 1 1V2.5ZM8 15C8 11.134 4.86599 8 1 8V6.5C5.69442 6.5 9.5 10.3056 9.5 15H8ZM2.5 15C2.5 14.1716 1.82843 13.5 1 13.5V12C2.65685 12 4 13.3431 4 15H2.5Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "6",
      name: "Community",
      src: "community",
      shortcut: "⌘C",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "7",
      name: "Support",
      src: "support",
      shortcut: "⇧⌘S",
      icon: (
        <svg
          data-testid="geist-icon"
          className="mr-2"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            d="M12.798 1.24199L13.3283 1.77232L14.0567 1.04389L13.1398 0.574402L12.798 1.24199ZM9.95705 4.0829L9.42672 3.55257L9.95705 4.0829ZM6.5844 6.95555L7.11473 7.48588L7.46767 7.13295L7.27837 6.67111L6.5844 6.95555ZM1.49995 12.04L2.03027 12.5703L2.03028 12.5703L1.49995 12.04ZM1.49994 14.54L0.969615 15.0703H0.969615L1.49994 14.54ZM3.99995 14.54L4.53028 15.0703L3.99995 14.54ZM9.10147 9.43848L9.37633 8.74066L8.91883 8.56046L8.57114 8.90815L9.10147 9.43848ZM14.7848 3.25519L15.4568 2.92229L14.9931 1.98617L14.2544 2.72486L14.7848 3.25519ZM11.9571 6.0829L11.4267 5.55257L11.9571 6.0829ZM10.5428 6.0829L11.0732 5.55257L11.0732 5.55257L10.5428 6.0829ZM9.95705 5.49711L9.42672 6.02744L9.42672 6.02745L9.95705 5.49711ZM12.2676 0.711655L9.42672 3.55257L10.4874 4.61323L13.3283 1.77232L12.2676 0.711655ZM10.7499 1.5C11.3659 1.5 11.9452 1.64794 12.4562 1.90957L13.1398 0.574402C12.4221 0.206958 11.6091 0 10.7499 0V1.5ZM6.99994 5.25C6.99994 3.17893 8.67888 1.5 10.7499 1.5V0C7.85045 0 5.49994 2.3505 5.49994 5.25H6.99994ZM7.27837 6.67111C7.09913 6.23381 6.99994 5.75443 6.99994 5.25H5.49994C5.49994 5.95288 5.63848 6.62528 5.89043 7.23999L7.27837 6.67111ZM6.05407 6.42522L0.969615 11.5097L2.03028 12.5703L7.11473 7.48588L6.05407 6.42522ZM0.969616 11.5097C-0.0136344 12.4929 -0.013635 14.0871 0.969615 15.0703L2.03027 14.0097C1.63281 13.6122 1.63281 12.9678 2.03027 12.5703L0.969616 11.5097ZM0.969615 15.0703C1.95287 16.0536 3.54703 16.0536 4.53028 15.0703L3.46962 14.0097C3.07215 14.4071 2.42774 14.4071 2.03027 14.0097L0.969615 15.0703ZM4.53028 15.0703L9.6318 9.96881L8.57114 8.90815L3.46962 14.0097L4.53028 15.0703ZM10.7499 9C10.2637 9 9.80071 8.90782 9.37633 8.74066L8.82661 10.1363C9.4232 10.3713 10.0724 10.5 10.7499 10.5V9ZM14.4999 5.25C14.4999 7.32107 12.821 9 10.7499 9V10.5C13.6494 10.5 15.9999 8.1495 15.9999 5.25H14.4999ZM14.1127 3.5881C14.3604 4.08811 14.4999 4.65168 14.4999 5.25H15.9999C15.9999 4.4156 15.8047 3.62465 15.4568 2.92229L14.1127 3.5881ZM12.4874 6.61323L15.3151 3.78552L14.2544 2.72486L11.4267 5.55257L12.4874 6.61323ZM10.0125 6.61323C10.6959 7.29665 11.804 7.29665 12.4874 6.61323L11.4267 5.55257C11.3291 5.6502 11.1708 5.6502 11.0732 5.55257L10.0125 6.61323ZM9.42672 6.02745L10.0125 6.61323L11.0732 5.55257L10.4874 4.96678L9.42672 6.02745ZM9.42672 3.55257C8.7433 4.23599 8.7433 5.34403 9.42672 6.02744L10.4874 4.96678C10.3898 4.86915 10.3897 4.71086 10.4874 4.61323L9.42672 3.55257Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "8",
      name: "Download",
      src: "downloads",
      shortcut: "⇧⌘D",
      icon: (
        <svg
          data-testid="geist-icon"
          height={16}
          className="mr-2"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "9",
      name: "Try On Web",
      src: "webapp",
      shortcut: "⌘T",
      icon: (
        <svg
          data-testid="geist-icon"
          height={16}
          className="mr-2"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.268 14.0934C11.9051 13.4838 13.2303 12.2333 13.9384 10.6469C13.1192 10.7941 12.2138 10.9111 11.2469 10.9925C11.0336 12.2005 10.695 13.2621 10.268 14.0934ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.48347 14.4823C8.32384 14.494 8.16262 14.5 8 14.5C7.83738 14.5 7.67616 14.494 7.51654 14.4823C7.5132 14.4791 7.50984 14.4759 7.50647 14.4726C7.2415 14.2165 6.94578 13.7854 6.67032 13.1558C6.41594 12.5744 6.19979 11.8714 6.04101 11.0778C6.67605 11.1088 7.33104 11.125 8 11.125C8.66896 11.125 9.32395 11.1088 9.95899 11.0778C9.80021 11.8714 9.58406 12.5744 9.32968 13.1558C9.05422 13.7854 8.7585 14.2165 8.49353 14.4726C8.49016 14.4759 8.4868 14.4791 8.48347 14.4823ZM11.4187 9.72246C12.5137 9.62096 13.5116 9.47245 14.3724 9.28806C14.4561 8.87172 14.5 8.44099 14.5 8C14.5 7.55901 14.4561 7.12828 14.3724 6.71194C13.5116 6.52755 12.5137 6.37904 11.4187 6.27753C11.4719 6.83232 11.5 7.40867 11.5 8C11.5 8.59133 11.4719 9.16768 11.4187 9.72246ZM10.1525 6.18401C10.2157 6.75982 10.25 7.36805 10.25 8C10.25 8.63195 10.2157 9.24018 10.1525 9.81598C9.46123 9.85455 8.7409 9.875 8 9.875C7.25909 9.875 6.53877 9.85455 5.84749 9.81598C5.7843 9.24018 5.75 8.63195 5.75 8C5.75 7.36805 5.7843 6.75982 5.84749 6.18401C6.53877 6.14545 7.25909 6.125 8 6.125C8.74091 6.125 9.46123 6.14545 10.1525 6.18401ZM11.2469 5.00748C12.2138 5.08891 13.1191 5.20593 13.9384 5.35306C13.2303 3.7667 11.9051 2.51622 10.268 1.90662C10.695 2.73788 11.0336 3.79953 11.2469 5.00748ZM8.48347 1.51771C8.4868 1.52089 8.49016 1.52411 8.49353 1.52737C8.7585 1.78353 9.05422 2.21456 9.32968 2.84417C9.58406 3.42562 9.80021 4.12856 9.95899 4.92219C9.32395 4.89118 8.66896 4.875 8 4.875C7.33104 4.875 6.67605 4.89118 6.04101 4.92219C6.19978 4.12856 6.41594 3.42562 6.67032 2.84417C6.94578 2.21456 7.2415 1.78353 7.50647 1.52737C7.50984 1.52411 7.51319 1.52089 7.51653 1.51771C7.67615 1.50597 7.83738 1.5 8 1.5C8.16262 1.5 8.32384 1.50597 8.48347 1.51771ZM5.73202 1.90663C4.0949 2.51622 2.76975 3.7667 2.06159 5.35306C2.88085 5.20593 3.78617 5.08891 4.75309 5.00748C4.96639 3.79953 5.30497 2.73788 5.73202 1.90663ZM4.58133 6.27753C3.48633 6.37904 2.48837 6.52755 1.62761 6.71194C1.54392 7.12828 1.5 7.55901 1.5 8C1.5 8.44099 1.54392 8.87172 1.62761 9.28806C2.48837 9.47245 3.48633 9.62096 4.58133 9.72246C4.52807 9.16768 4.5 8.59133 4.5 8C4.5 7.40867 4.52807 6.83232 4.58133 6.27753ZM4.75309 10.9925C3.78617 10.9111 2.88085 10.7941 2.06159 10.6469C2.76975 12.2333 4.0949 13.4838 5.73202 14.0934C5.30497 13.2621 4.96639 12.2005 4.75309 10.9925Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      id: "10",
      name: "AI Chat Box",
      src: "ai",
      shortcut: "⇧⌘A",
      icon: (
        <svg
          data-testid="geist-icon"
          height={16}
          className="mr-2"
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{ color: "currentcolor" }}
        >
          <path
            d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z"
            fill="currentColor"
          />
          <path
            d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z"
            fill="currentColor"
          />
          <path
            d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div
        onClick={() => setOpen((open) => !open)}
        className="group flex h-[30px] w-[220px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]"
      >
        <div className="flex h-full items-center justify-center transition-all duration-200 ease-out dark:text-[#ffffff] dark:group-hover:text-white">
          <div className="flex h-full items-center gap-3">
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
                d="M3.5 7C3.5 5.067 5.067 3.5 7 3.5C8.933 3.5 10.5 5.067 10.5 7C10.5 7.88461 10.1718 8.69256 9.63058 9.30876L9.30876 9.63058C8.69256 10.1718 7.88461 10.5 7 10.5C5.067 10.5 3.5 8.933 3.5 7ZM9.96544 11.0261C9.13578 11.6382 8.11014 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.11014 11.6382 9.13578 11.0261 9.96544L14.0303 12.9697L14.5607 13.5L13.5 14.5607L12.9697 14.0303L9.96544 11.0261Z"
                fill="currentColor"
              />
            </svg>

            <p className="text-xs">Search for documention</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1 rounded-md border px-1">
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
                    d="M1 3.75C1 2.23122 2.23122 1 3.75 1C5.26878 1 6.5 2.23122 6.5 3.75V5H9.5V3.75C9.5 2.23122 10.7312 1 12.25 1C13.7688 1 15 2.23122 15 3.75C15 5.26878 13.7688 6.5 12.25 6.5H11V9.5H12.25C13.7688 9.5 15 10.7312 15 12.25C15 13.7688 13.7688 15 12.25 15C10.7312 15 9.5 13.7688 9.5 12.25V11H6.5V12.25C6.5 13.7688 5.26878 15 3.75 15C2.23122 15 1 13.7688 1 12.25C1 10.7312 2.23122 9.5 3.75 9.5H5V6.5H3.75C2.23122 6.5 1 5.26878 1 3.75ZM11 5H12.25C12.9404 5 13.5 4.44036 13.5 3.75C13.5 3.05964 12.9404 2.5 12.25 2.5C11.5596 2.5 11 3.05964 11 3.75V5ZM9.5 6.5H6.5V9.5H9.5V6.5ZM11 12.25V11H12.25C12.9404 11 13.5 11.5596 13.5 12.25C13.5 12.9404 12.9404 13.5 12.25 13.5C11.5596 13.5 11 12.9404 11 12.25ZM5 11H3.75C3.05964 11 2.5 11.5596 2.5 12.25C2.5 12.9404 3.05964 13.5 3.75 13.5C4.44036 13.5 5 12.9404 5 12.25V11ZM5 3.75V5H3.75C3.05964 5 2.5 4.44036 2.5 3.75C2.5 3.05964 3.05964 2.5 3.75 2.5C4.44036 2.5 5 3.05964 5 3.75Z"
                    fill="currentColor"
                  />
                </svg>
                <p className="text-xs">K</p>
              </div>
            </div>
          </div>
        </div>
        {/* <p className="select-none text-sm text-[#7c7c7c] transition-colors duration-300 ease-out dark:group-hover:text-white">
          Search documetion...
        </p> */}
        {/* <p className="text-sm text-muted-foreground">
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </p> */}
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList className="custom_command_scroll h-[500px]">
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Link">
            {docsTitle.map((items_cm) => (
              <CommandItem
                key={items_cm.id}
                onSelect={() => {
                  router.push(`${items_cm.src}`);
                  setOpen((open) => !open);
                }}
              >
                {items_cm.icon}

                <span>{items_cm.name}</span>
                <CommandShortcut>{items_cm.shortcut}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem
              onSelect={() => {
                setTheme("light");
                setOpen((open) => !open);
              }}
            >
              <SunIcon className="mr-2" />
              <span>Light</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("dark");
                setOpen((open) => !open);
              }}
            >
              <MoonIcon className="mr-2" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setTheme("system");
                setOpen((open) => !open);
              }}
            >
              <LaptopIcon className="mr-2" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
