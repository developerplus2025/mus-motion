"use client";

import * as React from "react";
import {
  Music,
  Play,
  Sliders,
  AudioWaveformIcon as Waveform,
  Headphones,
  Mic2,
  HelpCircle,
  BookOpen,
  Settings,
} from "lucide-react";

import { SearchForm } from "./search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

// This is sample data for the music software documentation.
const docSections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { title: "Installation", url: "#installation" },
      { title: "Quick Start Guide", url: "#quick-start" },
      { title: "System Requirements", url: "#system-requirements" },
    ],
  },
  {
    title: "Core Features",
    icon: Music,
    items: [
      { title: "Audio Editing", url: "#audio-editing" },
      { title: "MIDI Sequencing", url: "#midi-sequencing" },
      { title: "Virtual Instruments", url: "#virtual-instruments" },
    ],
  },
  {
    title: "Audio Processing",
    icon: Waveform,
    items: [
      { title: "Effects and Plugins", url: "#effects-plugins" },
      { title: "Mixing Console", url: "#mixing-console" },
      { title: "Mastering Tools", url: "#mastering-tools" },
    ],
  },
  {
    title: "Recording",
    icon: Mic2,
    items: [
      { title: "Audio Recording", url: "#audio-recording" },
      { title: "MIDI Recording", url: "#midi-recording" },
      { title: "Multitrack Recording", url: "#multitrack-recording" },
    ],
  },
  {
    title: "Playback and Performance",
    icon: Play,
    items: [
      { title: "Transport Controls", url: "#transport-controls" },
      { title: "Live Performance Mode", url: "#live-performance" },
      { title: "Tempo and Time Signature", url: "#tempo-time-signature" },
    ],
  },
  {
    title: "Sound Design",
    icon: Sliders,
    items: [
      { title: "Synthesizer Basics", url: "#synth-basics" },
      { title: "Sampler Instruments", url: "#sampler-instruments" },
      { title: "Modulation and Routing", url: "#modulation-routing" },
    ],
  },
  {
    title: "Project Management",
    icon: Settings,
    items: [
      { title: "Project Settings", url: "#project-settings" },
      { title: "File Management", url: "#file-management" },
      { title: "Collaboration Features", url: "#collaboration" },
    ],
  },
  {
    title: "Troubleshooting",
    icon: HelpCircle,
    items: [
      { title: "Common Issues", url: "#common-issues" },
      { title: "Performance Optimization", url: "#performance-optimization" },
      { title: "FAQs", url: "#faqs" },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-black" {...props}>
      <SidebarHeader>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="pl-4">
          {docSections.map((section) => (
            <SidebarMenuItem key={section.title}>
              <SidebarGroupLabel>
                <section.icon className="mr-2 h-4 w-4" />
                <span>{section.title}</span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {section.items.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarGroupContent>
            </SidebarMenuItem>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
