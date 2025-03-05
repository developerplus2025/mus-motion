"use client";

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";

export default function SupportPage() {
  const { toast } = useToast();
  const list_version = [
    {
      id: 1,
      version: "10.8.9",
      day: "December 10th, 2024",
      description:
        "Enhanced music loading speed, added an advanced equalizer, and fixed critical issues for a smoother experience.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
    {
      id: 1,
      version: "9.8.4",
      day: "December 10th, 2024",
      description:
        "Updated the recommendation engine and fixed offline playback issues.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
    {
      id: 1,
      version: "8.2.4",
      day: "December 10th, 2024",
      description: "Launched a modern, redesigned UI with dark mode support.",
      features: [
        {
          id: 1_1,
          text: "Added a 10-band Equalizer with multiple presets.",
        },
        {
          id: 1_2,
          text: "Introduced real-time synchronized lyrics.",
        },
        {
          id: 1_3,
          text: "Enabled high-quality offline downloads (up to FLAC).",
        },
        {
          id: 1_4,
          text: "Added a Recently Played section for quick access.",
        },
      ],
      improvements: [
        {
          id: 1_1,
          text: "Improved playlist loading speed by 30%.",
        },
        {
          id: 1_2,
          text: "Optimized UI responsiveness when switching songs.",
        },
        {
          id: 1_3,
          text: "Enhanced music recommendation algorithm.",
        },
      ],
      fixes: [
        {
          id: 1_1,
          text: "Fixed an issue where offline songs would disappear.",
        },
        {
          id: 1_2,
          text: "Resolved high CPU usage when playing long playlists.",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="mt-[3rem] text-center text-xl font-bold">
        <p>The latest FloraVF news </p>
      </div>
      <div className="my-[4rem] grid grid-cols-1 justify-items-center gap-[3rem] px-[2rem]">
        {list_version.map((list) => (
          <div
            key={list.id}
            className="flex w-[850px] flex-col gap-4 rounded-lg border p-4"
          >
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <p className="text-xl font-bold">Flora v{list.version}</p>
                <div className="flex items-center gap-2">
                  {" "}
                  <p className="text-sm text-[#a1a1a1]">{list.day}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-sm text-[#a1a1a1]">{list.description}</p>
              </div>
              <div>
                <p className="font-semibold">Change:</p>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">New Features:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.features.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Improvements:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.improvements.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2 pl-[1rem]">
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Fixed:</p>
                  </div>
                  <ul className="mt-2 flex flex-col gap-2 pl-[1rem]">
                    {list.fixes.map((gh) => (
                      <li
                        key={gh.id}
                        className="flex items-center gap-2 text-sm text-[#a1a1a1]"
                      >
                        <div className="h-2 w-2 rounded-full bg-white"></div>
                        {gh.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex gap-[4rem]">
              <Button className="w-full" variant={"outline"}>
                Download
              </Button>
              <Button className="w-full">View It</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
