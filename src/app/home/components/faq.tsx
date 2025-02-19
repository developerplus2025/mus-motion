// Dependencies: pnpm install lucide-react

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";
import Image from "next/image";
const branch = [
  {
    id: "1",
    src: "tailwindcss",
  },
  {
    id: "2",
    src: "framer",
  },
  {
    id: "3",
    src: "shadcnui",
  },
  {
    id: "4",
    src: "react",
  },
  {
    id: "5",
    src: "nextjs",
  },
  {
    id: "6",
    src: "swc",
  },
];
const items = [
  {
    id: "1",
    title: "What makes Origin UI different?",
    content:
      "Origin UI focuses on developer experience and performance. Built with TypeScript, it offers excellent type safety, follows accessibility standards, and provides comprehensive documentation with regular updates.",
  },
  {
    id: "2",
    title: "How can I customize the components?",
    content:
      "Use our CSS variables for global styling, or className and style props for component-specific changes. We support CSS modules, Tailwind, and dark mode out of the box.",
  },
  {
    id: "3",
    title: "Is Origin UI optimized for performance?",
    content:
      "Yes, with tree-shaking, code splitting, and minimal runtime overhead. Most components are under 5KB gzipped.",
  },
  {
    id: "4",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "5",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "6",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "7",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
  {
    id: "8",
    title: "How accessible are the components?",
    content:
      "All components follow WAI-ARIA standards, featuring proper ARIA attributes, keyboard navigation, and screen reader support. Regular testing ensures compatibility with NVDA, VoiceOver, and JAWS.",
  },
];

export default function AccordionFAQ() {
  return (
    <div className="w-full flex justify-center px-[3rem] ">
      <div className=" w-full flex-row-reverse items-center flex gap-[5rem] border rounded-lg">
      <div className=" space-y-4">
        <Accordion
          type="single"
          collapsible
          className="w-[650px] border-[0px] first:rounded-t-[0px] last:rounded-b-[0px]    -space-y-px"
          defaultValue="3"
        >
          {items.map((item) => (
            <AccordionItem
              value={item.id}
              key={item.id}
              className={`"${item.id == "8" ? "border-b-[0px]"  : "border"} ${item.id == "1" ? "border-b-[0px]"  : "border"} bg-background px-4 py-1 "`}
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center gap-3 py-2 text-left text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&>svg]:-order-1 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180">
                  {item.title}
                  <Plus
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="flex w-[500px] flex-col gap-[2rem] h-full justify-center items-center">
      <h1 className="text-[3.5rem] leading-[4.5rem]  font-bold text-center tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">Got Questions? We&apos;ve Got Answers!</h1>
      <span className="md:text-md max-w-[500px] text-center text-zinc-500 dark:text-zinc-400">Curious about our flora software? Check out the frequently asked questions below to find answers about features, pricing, customization, and more. Whether you&apos;re wondering how it works or what&apos;s included, we&apos;ve got all the details you need right here.</span></div>
     
      {/* <div className="grid grid-cols-3 place-items-center gap-[4rem] rounded-lg">
        {branch.map((branch) => (
          <div
            className="flex h-[150px] w-[300px] flex-col items-start justify-start gap-1 rounded-lg border px-4 py-4"
            key={branch.id}
          >
            <Image
              src={`/${branch.src}.svg`}
              alt={branch.src}
              className="h-[50px] w-[50px]"
              height={"30"}
              width={"30"}
            ></Image>
            <h1 className="text-md capitalize">{branch.src}</h1>
            <h1 className="text-sm capitalize text-[#a1a1a1]">
              The library for web and native user interfaces. Next.js is built
              on the latest React features, including Server Components and
              Actions.
            </h1>
          </div>
        ))}
      </div> */}
    </div>
    </div>
    
  );
}
