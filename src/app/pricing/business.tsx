"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ToastAction } from "@/components/ui/toast";
import {
  CreditCard,
  CheckCircle,
  AlertCircle,
  Info,
  Lock,
  Check,
  ChevronsUpDown,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  CaretSortIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BadgeCheck, HelpCircleIcon } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

const pricingData = {
  individual: [
    {
      title: "Stater Plan",
      price: 0,
      description: "For entry-level users and trial",
      features: [
        {
          name: "5 virtual instruments",
          icon: (
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
                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "10 audio effects",
          icon: (
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
                d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "2GB cloud storage",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Community forum access",
          icon: (
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
                d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Basic tutorials and resources",
          icon: (
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
                d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Limited export options",
          icon: (
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
                d="M11.75 0.189331L12.2803 0.719661L15.2803 3.71966L15.8107 4.24999L15.2803 4.78032L5.15901 14.9016C4.45575 15.6049 3.50192 16 2.50736 16H0.75H0V15.25V13.4926C0 12.4981 0.395088 11.5442 1.09835 10.841L11.2197 0.719661L11.75 0.189331ZM11.75 2.31065L9.81066 4.24999L11.75 6.18933L13.6893 4.24999L11.75 2.31065ZM2.15901 11.9016L8.75 5.31065L10.6893 7.24999L4.09835 13.841C3.67639 14.2629 3.1041 14.5 2.50736 14.5H1.5V13.4926C1.5 12.8959 1.73705 12.3236 2.15901 11.9016ZM9 16H16V14.5H9V16Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Monthly newsletters",
          icon: (
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
                d="M14.5 13.5V6.5V5.41421C14.5 5.149 14.3946 4.89464 14.2071 4.70711L9.79289 0.292893C9.60536 0.105357 9.351 0 9.08579 0H8H3H1.5V1.5V13.5C1.5 14.8807 2.61929 16 4 16H12C13.3807 16 14.5 14.8807 14.5 13.5ZM13 13.5V6.5H9.5H8V5V1.5H3V13.5C3 14.0523 3.44772 14.5 4 14.5H12C12.5523 14.5 13 14.0523 13 13.5ZM9.5 5V2.12132L12.3787 5H9.5ZM5.13 5.00062H4.505V6.25062H5.13H6H6.625V5.00062H6H5.13ZM4.505 8H5.13H11H11.625V9.25H11H5.13H4.505V8ZM5.13 11H4.505V12.25H5.13H11H11.625V11H11H5.13Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Access to user community events",
          icon: (
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
                d="M4.25 1.5C1.90279 1.5 0 3.40279 0 5.75C0 6.78972 0.374315 7.74397 0.994693 8.48243L2.14319 7.51757C1.74136 7.03926 1.5 6.42379 1.5 5.75C1.5 4.23122 2.73122 3 4.25 3H8.5C10.0188 3 11.25 4.23122 11.25 5.75C11.25 7.26878 10.0188 8.5 8.5 8.5V10C10.8472 10 12.75 8.09721 12.75 5.75C12.75 3.40279 10.8472 1.5 8.5 1.5H4.25ZM11.75 13L7.5 13C5.98122 13 4.75 11.7688 4.75 10.25C4.75 8.73122 5.98122 7.5 7.5 7.5V6C5.15279 6 3.25 7.90279 3.25 10.25C3.25 12.5972 5.15279 14.5 7.5 14.5L11.75 14.5C14.0972 14.5 16 12.5972 16 10.25C16 9.21028 15.6257 8.25603 15.0053 7.51757L13.8568 8.48243C14.2586 8.96074 14.5 9.57621 14.5 10.25C14.5 11.7688 13.2688 13 11.75 13Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Basic Plan",
      price: 12,
      description: "For hobbyists and beginners",
      features: [
        {
          name: "10 virtual instruments",
          icon: (
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
                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "50 audio effects",
          icon: (
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
                d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "5GB cloud storage",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Community forum access",
          icon: (
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
                d="M2.5 3.25C2.5 1.45507 3.95507 0 5.75 0H6.25C8.04493 0 9.5 1.45507 9.5 3.25V3.75C9.5 5.54493 8.04493 7 6.25 7H5.75C3.95507 7 2.5 5.54493 2.5 3.75V3.25ZM5.75 1.5C4.7835 1.5 4 2.2835 4 3.25V3.75C4 4.7165 4.7835 5.5 5.75 5.5H6.25C7.2165 5.5 8 4.7165 8 3.75V3.25C8 2.2835 7.2165 1.5 6.25 1.5H5.75ZM1.5 14.5V13.1709C2.31958 11.5377 3.99308 10.5 5.82945 10.5H6.17055C8.00692 10.5 9.68042 11.5377 10.5 13.1709V14.5H1.5ZM5.82945 9C3.35483 9 1.10604 10.4388 0.0690305 12.6857L0 12.8353V13V15.25V16H0.75H11.25H12V15.25V13V12.8353L11.931 12.6857C10.894 10.4388 8.64517 9 6.17055 9H5.82945ZM15.931 12.6857C15.3706 11.4715 14.4561 10.4931 13.3439 9.85058L12.5935 11.1494C13.399 11.6148 14.0681 12.3101 14.5 13.1709V14.5H13.5V16H15.25H16V15.25V13V12.8352L15.931 12.6857ZM11.25 0H10.5V1.5H11.25C12.2165 1.5 13 2.2835 13 3.25V3.75C13 4.7165 12.2165 5.5 11.25 5.5H10.5V7H11.25C13.0449 7 14.5 5.54493 14.5 3.75V3.25C14.5 1.45507 13.0449 0 11.25 0Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Standard tutorials and resources",
          icon: (
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
                d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Basic MIDI support",
          icon: (
            <svg
              data-testid="geist-icon"
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
          name: "Limited collaborative features",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M1 6L15 1L10 15L7.65955 8.91482C7.55797 8.65073 7.34927 8.44203 7.08518 8.34045L1 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="bevel"
                fill="transparent"
              />
            </svg>
          ),
        },
        {
          name: "Monthly live Q&A sessions",
          icon: (
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
                d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM9 11C9 11.5523 8.55229 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55229 10 9 10.4477 9 11ZM7.09584 5.82182C7.25716 5.48223 7.6022 5.25 7.99999 5.25C8.55227 5.25 8.99999 5.69772 8.99999 6.25C8.99999 6.75329 8.62748 7.17086 8.14337 7.23989C7.70367 7.3026 7.24999 7.67511 7.24999 8.25V8.5V9.25H8.74999V8.63535C9.76443 8.31661 10.5 7.36971 10.5 6.25C10.5 4.86929 9.3807 3.75 7.99999 3.75C7.00158 3.75 6.14136 4.3353 5.74095 5.17818L5.41913 5.85563L6.77402 6.49926L7.09584 5.82182Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Plus Plan",
      price: 26,
      description: "For serious musicians and producers",
      features: [
        {
          name: "50 virtual instruments",
          icon: (
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
                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "100 audio effects",
          icon: (
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
                d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "25GB cloud storage",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Priority email support",
          icon: (
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
                d="M13.2642 3.5H2.73578L8 8.01219L13.2642 3.5ZM1.5 4.41638V11.5C1.5 12.0523 1.94772 12.5 2.5 12.5H13.5C14.0523 12.5 14.5 12.0523 14.5 11.5V4.41638L8.48809 9.56944L8 9.98781L7.51191 9.56944L1.5 4.41638ZM0 2H1.5H14.5H16V3.5V11.5C16 12.8807 14.8807 14 13.5 14H2.5C1.11929 14 0 12.8807 0 11.5V3.5V2Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Collaboration tools",
          icon: (
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
                d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Access to premium tutorials and workshops",
          icon: (
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
                d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1ZM7.25 4.75C7.25 3.50736 6.24264 2.5 5 2.5H1.5V12.25H5.25736C5.96786 12.25 6.65758 12.4516 7.25 12.8232V4.75ZM8.75 12.8232V4.75C8.75 3.50736 9.75736 2.5 11 2.5H14.5V12.25H10.7426C10.0321 12.25 9.34242 12.4516 8.75 12.8232Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Monthly feature updates",
          icon: (
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
                d="M8.75 1V1.75V8.68934L10.7197 6.71967L11.25 6.18934L12.3107 7.25L11.7803 7.78033L8.70711 10.8536C8.31658 11.2441 7.68342 11.2441 7.29289 10.8536L4.21967 7.78033L3.68934 7.25L4.75 6.18934L5.28033 6.71967L7.25 8.68934V1.75V1H8.75ZM13.5 9.25V13.5H2.5V9.25V8.5H1V9.25V14C1 14.5523 1.44771 15 2 15H14C14.5523 15 15 14.5523 15 14V9.25V8.5H13.5V9.25Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Cloud project backup",
          icon: (
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
                d="M1.5 4.875C1.5 3.01104 3.01104 1.5 4.875 1.5C6.20018 1.5 7.34838 2.26364 7.901 3.37829C8.1902 3.96162 8.79547 4.5 9.60112 4.5H12.25C13.4926 4.5 14.5 5.50736 14.5 6.75C14.5 7.42688 14.202 8.03329 13.7276 8.44689L13.1622 8.93972L14.1479 10.0704L14.7133 9.57758C15.5006 8.89123 16 7.8785 16 6.75C16 4.67893 14.3211 3 12.25 3H9.60112C9.51183 3 9.35322 2.93049 9.2449 2.71201C8.44888 1.1064 6.79184 0 4.875 0C2.18261 0 0 2.18261 0 4.875V6.40385C0 7.69502 0.598275 8.84699 1.52982 9.59656L2.11415 10.0667L3.0545 8.89808L2.47018 8.42791C1.87727 7.95083 1.5 7.22166 1.5 6.40385V4.875ZM7.29289 7.39645C7.68342 7.00592 8.31658 7.00592 8.70711 7.39645L11.7803 10.4697L12.3107 11L11.25 12.0607L10.7197 11.5303L8.75 9.56066V15.25V16H7.25V15.25V9.56066L5.28033 11.5303L4.75 12.0607L3.68934 11L4.21967 10.4697L7.29289 7.39645Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Pro Plan",
      price: 42,
      description: "For professional studios and artists",
      features: [
        {
          name: "Unlimited virtual instruments",
          icon: (
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
                d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Unlimited audio effects",
          icon: (
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
                d="M8 1C4.13401 1 1 4.13401 1 8V11H1.75H2.5H3.25C4.35457 11 5.25 10.1046 5.25 9V8.25C5.25 7.14543 4.35457 6.25 3.25 6.25H2.78426C3.51526 4.0704 5.57424 2.5 8 2.5C10.4258 2.5 12.4847 4.0704 13.2157 6.25H12.75C11.6454 6.25 10.75 7.14543 10.75 8.25V9C10.75 10.1046 11.6454 11 12.75 11H13.5C13.5 12.3807 12.3807 13.5 11 13.5H10V13C10 12.4477 9.55229 12 9 12H7C6.44772 12 6 12.4477 6 13V14C6 14.5523 6.44772 15 7 15H9H10H11C13.2091 15 15 13.2091 15 11V8C15 4.13401 11.866 1 8 1ZM12.75 7.75H13.4944C13.4981 7.83287 13.5 7.91622 13.5 8V9.5H12.75C12.4739 9.5 12.25 9.27614 12.25 9V8.25C12.25 7.97386 12.4739 7.75 12.75 7.75ZM2.50558 7.75C2.50187 7.83287 2.5 7.91622 2.5 8V9.5H3.25C3.52614 9.5 3.75 9.27614 3.75 9V8.25C3.75 7.97386 3.52614 7.75 3.25 7.75H2.50558Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "100GB cloud storage",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M12 6.50879L11.25 6.50798L11.2492 7.20768L11.9472 7.25693L12 6.50879ZM12 6.5L12.75 6.50081V6.5H12ZM4 6.5H3.25L3.25 6.50081L4 6.5ZM4.00001 6.50879L4.05281 7.25693L4.75077 7.20767L4.75001 6.50798L4.00001 6.50879ZM4.25 12.75C2.73122 12.75 1.5 11.5188 1.5 10H0C0 12.3472 1.90279 14.25 4.25 14.25V12.75ZM11.75 12.75H4.25V14.25H11.75V12.75ZM14.5 10C14.5 11.5188 13.2688 12.75 11.75 12.75V14.25C14.0972 14.25 16 12.3472 16 10H14.5ZM11.9472 7.25693C13.3736 7.35759 14.5 8.54758 14.5 10H16C16 7.75454 14.2591 5.91635 12.0528 5.76065L11.9472 7.25693ZM11.25 6.49919L11.25 6.50798L12.75 6.50961L12.75 6.50081L11.25 6.49919ZM8 3.25C9.79493 3.25 11.25 4.70507 11.25 6.5H12.75C12.75 3.87665 10.6234 1.75 8 1.75V3.25ZM4.75 6.5C4.75 4.70507 6.20507 3.25 8 3.25V1.75C5.37665 1.75 3.25 3.87665 3.25 6.5H4.75ZM4.75001 6.50798L4.75 6.49919L3.25 6.50081L3.25001 6.5096L4.75001 6.50798ZM1.5 10C1.5 8.54758 2.62644 7.35759 4.05281 7.25693L3.94721 5.76065C1.74094 5.91635 0 7.75454 0 10H1.5Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "24/7 phone support",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M5.5 1H2.87785C1.63626 1 0.694688 2.11946 0.907423 3.34268L1.14841 4.72836C1.96878 9.4455 5.51475 13.2235 10.1705 14.3409L12.5333 14.908C13.7909 15.2098 15 14.2566 15 12.9632V10.5L11.75 8.25L9.25 10.75L5.25 6.75L7.75 4.25L5.5 1Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
          ),
        },
        {
          name: "Advanced collaboration tools",
          icon: (
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
                d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4ZM12 5.5H10.5H5.5H4H1.5V9.25H7.25V8.5H8.75V9.25L14.5 9.25V5.5H12ZM8.75 10.75L14.5 10.75V13.5C14.5 14.0523 14.0523 14.5 13.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V10.75H7.25V11.5H8.75V10.75Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Custom plugin integration",
          icon: (
            <svg
              data-testid="geist-icon"
              height={16}
              strokeLinejoin="round"
              viewBox="0 0 16 16"
              width={16}
              style={{ color: "currentcolor" }}
            >
              <path
                d="M12.25 14.25V10L12.9212 10.1119C14.1403 10.315 15.25 9.37496 15.25 8.13908V7.86092C15.25 6.62504 14.1403 5.68496 12.9212 5.88813L12.25 6V1.75H8.235L8.30764 2.50382C8.41075 3.57386 7.56957 4.5 6.49457 4.5C5.42349 4.5 4.58361 3.58031 4.68058 2.51362L4.75 1.75H0.75V14.25H12.25Z"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "Exclusive artist packs",
          icon: (
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
                d="M9.753 14.2609C9.19532 14.4167 8.60739 14.5 8 14.5C5.49509 14.5 3.32112 13.0831 2.23586 11.007H9.753V14.2609ZM11.007 13.7641C13.0831 12.6789 14.5 10.5049 14.5 8C14.5 7.3926 14.4167 6.80466 14.2609 6.24699H11.007V13.7641ZM13.7641 4.99299H11.007H10.38H6.24699V1.73913C6.80466 1.58331 7.3926 1.5 8 1.5C10.5049 1.5 12.6789 2.91692 13.7641 4.99299ZM4.99299 2.23587C2.91692 3.32113 1.5 5.4951 1.5 8C1.5 8.60739 1.58331 9.19532 1.73913 9.753H4.99299V5.61999V4.99299V2.23587ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM6.24699 6.24699H9.75299V9.75299H6.24699V6.24699Z"
                fill="currentColor"
              />
            </svg>
          ),
        },
        {
          name: "Multi-user support for studios",
          icon: (
            <svg
              data-testid="geist-icon"
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
      ],
    },
  ],
  business: [
    {
      title: "Team",
      price: "$99.99",
      description: "For small studios and bands",
      features: [
        "5 user licenses",
        "100 virtual instruments",
        "200 audio effects",
        "100GB shared cloud storage",
        "Priority email support",
        "Team collaboration tools",
      ],
    },
    {
      title: "Studio",
      price: "$199.99",
      description: "For professional recording studios",
      features: [
        {
          name: "10 user licenses",
        },
        { name: "Unlimited virtual instruments" },
        { name: "Unlimited audio effects" },
        { name: "500GB shared cloud storage" },
        { name: "24/7 phone support" },
        { name: "Advanced team collaboration" },
        { name: "Custom plugin integration" },
      ],
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations and educational institutions",
      features: [
        "Unlimited user licenses",
        "Unlimited virtual instruments",
        "Unlimited audio effects",
        "1TB shared cloud storage",
        "Dedicated account manager",
        "On-site training and support",
        "Custom feature development",
      ],
    },
  ],
};
const packages = [
  {
    id: "basic",
    name: "Basic",
    price: 9.99,
    description: "Essential features for individuals",
    features: ["5 GB Storage", "2 Projects", "Basic Support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 19.99,
    description: "Advanced features for professionals",
    features: [
      "20 GB Storage",
      "Unlimited Projects",
      "Priority Support",
      "Advanced Analytics",
    ],
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 49.99,
    description: "Full suite for large organizations",
    features: [
      "100 GB Storage",
      "Unlimited Projects",
      "24/7 Premium Support",
      "Custom Integrations",
      "Dedicated Account Manager",
    ],
  },
];

export default function Business() {
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [activeTab, setActiveTab] = useState("individual");
  const [isYearly, setIsYearly] = useState(false);
  const handlePackageSelect = (packageId: string) => {
    const selected = packages.find((pkg) => pkg.id === packageId);
    if (selected) setSelectedPackage(selected);
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="px-[6rem]"
    >
      <div className="mb-[3rem] mt-4 flex items-center justify-center space-x-2">
        <span className="text-sm">Monthly</span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          id="billing-toggle"
        />
        <span className="text-sm">Yearly (10% off)</span>
      </div>
      <div className="grid gap-[2rem] md:grid-cols-4">
        {pricingData.individual.map((tier) => (
          <Card
            key={tier.title}
            className="flex flex-col rounded-lg border-[1px] dark:bg-[#000000]"
          >
            <CardHeader
              className={`${tier.title === "Starter Plan" ? "to-[#121212]" : tier.title === "Basic Plan" ? "to-[#121212]" : tier.title === "Plus Plan" ? "to-[#121212]" : "to-[#121212]"} space-y-2 rounded-t-lg bg-[#00000099] p-[1.5rem]`}
            >
              <CardTitle className="text-[1.04rem] font-medium text-[#a1a1a1]">
                <div className="flex items-center justify-between">
                  <p
                    className={`${tier.title === "Plus Plan" || tier.title === "Basic Plan" ? "hidden" : ""}`}
                  >
                    {tier.title}
                  </p>
                  <svg
                    className={`${tier.title === "Plus Plan" || tier.title === "Basic Plan" ? "hidden" : ""}`}
                    data-testid="geist-icon"
                    height={16}
                    strokeLinejoin="round"
                    style={{ color: "currentcolor" }}
                    viewBox="0 0 16 16"
                    width={16}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.25 7H7H7.74999C8.30227 7 8.74999 7.44772 8.74999 8V11.5V12.25H7.24999V11.5V8.5H7H6.25V7ZM8 6C8.55229 6 9 5.55228 9 5C9 4.44772 8.55229 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                {tier.title === "Plus Plan" && (
                  <div className="flex items-center justify-between">
                    <p>Plus Plan</p>
                    <Badge className="h-fit px-3 py-1" variant={"outline"}>
                      Popular
                    </Badge>
                  </div>
                )}
                {tier.title === "Basic Plan" && (
                  <div className="flex justify-between">
                    <p>Basic Plan</p>
                    <Badge className="h-fit px-3 py-1" variant={"outline"}>
                      Best Value
                    </Badge>
                  </div>
                )}
              </CardTitle>
              <NumberFlow
                className="mb-4 flex items-center text-3xl font-bold"
                value={
                  isYearly
                    ? parseFloat((tier.price * 12 * 2).toFixed(2))
                    : tier.price
                }
                locales="en-US"
                // format={{ style: "currency", currency: "USD" }}
                format={{
                  style: "currency",
                  currency: "USD",
                  trailingZeroDisplay: "stripIfInteger",
                }}
                suffix={`per user / ${isYearly ? "year" : "month"}`}
              />

              <CardDescription>{tier.description}</CardDescription>
              <div className="pt-[1rem]">
                {tier.title === "Pro Plan" && (
                  <div className="flex items-center justify-center gap-4">
                    {" "}
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => handlePackageSelect("ultimate")}
                        >
                          Get Started
                          <svg
                            className="rounded-full bg-black dark:bg-white"
                            data-testid="geist-icon"
                            height={16}
                            strokeLinejoin="round"
                            viewBox="0 0 16 16"
                            width={16}
                          >
                            <path
                              className="fill-black"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.74999 3.93933L7.28032 4.46966L10.1035 7.29288C10.4941 7.68341 10.4941 8.31657 10.1035 8.7071L7.28032 11.5303L6.74999 12.0607L5.68933 11L6.21966 10.4697L8.68933 7.99999L6.21966 5.53032L5.68933 4.99999L6.74999 3.93933Z"
                              fill="currentColor"
                            />
                          </svg>
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent className="max-w-[62rem]">
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            <Card className="bg-black">
                              <CardHeader>
                                <CardTitle>Select a Software Package</CardTitle>
                                <CardDescription>
                                  Choose the package that best fits your needs
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="mb-4 flex items-center justify-end space-x-2">
                                  <span className="text-sm">Monthly</span>
                                  <Switch
                                    checked={isYearly}
                                    onCheckedChange={setIsYearly}
                                    id="billing-toggle"
                                  />
                                  <span className="text-sm">
                                    Yearly (10% off)
                                  </span>
                                </div>
                                <RadioGroup
                                  className="grid-cols-3 gap-4"
                                  defaultValue={selectedPackage.id}
                                  onValueChange={handlePackageSelect}
                                >
                                  {packages.map((pkg) => (
                                    <Card
                                      key={pkg.id}
                                      className={`mb-4 bg-black ${selectedPackage.id === pkg.id ? "shadow outline-none ring-2 ring-ring ring-offset-2 ring-offset-background" : ""}`}
                                    >
                                      <CardHeader>
                                        <div className="flex items-center justify-between">
                                          <div className="flex items-center space-x-2">
                                            <RadioGroupItem
                                              value={pkg.id}
                                              id={pkg.id}
                                            />
                                            <Label
                                              htmlFor={pkg.id}
                                              className="text-lg font-semibold"
                                            >
                                              {pkg.name}
                                            </Label>
                                          </div>
                                          <Badge variant="secondary">
                                            $
                                            {isYearly
                                              ? (pkg.price * 12 * 0.9).toFixed(
                                                  2,
                                                )
                                              : pkg.price}
                                            /{isYearly ? "year" : "month"}
                                          </Badge>
                                        </div>
                                      </CardHeader>
                                      <CardContent>
                                        <p className="mb-2 text-sm text-muted-foreground">
                                          {pkg.description}
                                        </p>
                                        <ul className="list-inside list-disc text-sm">
                                          {pkg.features.map(
                                            (feature, index) => (
                                              <li key={index}>{feature}</li>
                                            ),
                                          )}
                                        </ul>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </RadioGroup>
                              </CardContent>
                            </Card>
                          </AlertDialogTitle>
                          <AlertDialogDescription className="flex items-center gap-2">
                            <Checkbox id="terms" required />
                            <label
                              htmlFor="terms"
                              className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              By purchasing a package, you agree to our{" "}
                              <a
                                href="#"
                                className="text-primary hover:underline"
                              >
                                terms and conditions
                              </a>{" "}
                              of Service. Please read them carefully before
                              proceeding with your purchase.{" "}
                            </label>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="ml-[1.4rem]">
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button className="w-full">Contact Sale</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="flex items-center gap-[1rem]">
                            <Input type="email" placeholder="Email" />
                            <Button variant="outline">Subscribe</Button>
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            Please Enter Your Email To We Send Sale Code
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                )}
                {tier.title !== "Plus Plan" && tier.title !== "Pro Plan" && (
                  <Button className="w-full" variant={"outline"}>
                    Get Started
                    <svg
                      data-testid="geist-icon"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      className="rounded-full bg-black fill-black dark:bg-white"
                      width={16}
                    >
                      <path
                        className="fill-black"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74999 3.93933L7.28032 4.46966L10.1035 7.29288C10.4941 7.68341 10.4941 8.31657 10.1035 8.7071L7.28032 11.5303L6.74999 12.0607L5.68933 11L6.21966 10.4697L8.68933 7.99999L6.21966 5.53032L5.68933 4.99999L6.74999 3.93933Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                )}
                {tier.title === "Plus Plan" && (
                  <Button className="w-full" variant={"outline"}>
                    Upgrade Now
                    <svg
                      data-testid="geist-icon"
                      className="rounded-full bg-black fill-black dark:bg-white"
                      height={16}
                      strokeLinejoin="round"
                      viewBox="0 0 16 16"
                      width={16}
                    >
                      <path
                        className="fill-black"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.74999 3.93933L7.28032 4.46966L10.1035 7.29288C10.4941 7.68341 10.4941 8.31657 10.1035 8.7071L7.28032 11.5303L6.74999 12.0607L5.68933 11L6.21966 10.4697L8.68933 7.99999L6.21966 5.53032L5.68933 4.99999L6.74999 3.93933Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow pt-[8px]">
              <ul className="space-y-2 rounded-lg border-t first:pt-[1rem]">
                {tier.features.map((feature) => (
                  <li
                    key={feature.name}
                    className="flex items-center gap-2 px-2"
                  >
                    <div className="rounded-md p-[4px]">
                      {/* {feature.icon} */}
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
                          d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5303 6.53033L12.0607 6L11 4.93934L10.4697 5.46967L6.5 9.43934L5.53033 8.46967L5 7.93934L3.93934 9L4.46967 9.53033L5.96967 11.0303C6.26256 11.3232 6.73744 11.3232 7.03033 11.0303L11.5303 6.53033Z"
                          fill="currentColor"
                        />
                      </svg>

                      {/* <CheckIcon className="h-[15px] w-[15px] flex-shrink-0 text-[#ffffff]" /> */}
                    </div>
                    <p className="text-sm text-[white]">{feature.name}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="justify-center rounded-none px-6 py-[1rem]"></CardFooter>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
// bg-gradient-to-tr from-black/50 to-[#121212]
