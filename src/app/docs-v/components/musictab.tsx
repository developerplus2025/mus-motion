import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import Image from "next/image";
import { CirclePlus, ListMusic } from "lucide-react";
import { playlist, PlayList } from "../data/playlist";
import { list, List } from "../data/list";
export default function MusicTab() {
  return (
    <div className="h-full w-full">
      <div>
        <Tabs defaultValue="music">
          <div className="flex justify-between">
            <TabsList className="">
              <div>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="podcasts">PodCasts</TabsTrigger>
                <TabsTrigger value="live">Live</TabsTrigger>
              </div>
            </TabsList>
            <div>
              <Button>
                <CirclePlus className="mr-2 h-4 w-4" /> Add Music
              </Button>
            </div>
          </div>
          <TabsContent value="music">
            <div>
              <div>
                <h1 className="text-md mt-[1rem]">Listen Now</h1>
                <p className="text-sm text-[#a1a1a1]">
                  Top picks for you. Updated daily.
                </p>
              </div>
              <div className="">
                <ScrollArea className="mt-[1.5rem] h-[450px] w-full border-t pt-[1.5rem] dark:border-t-[#202020]">
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
                            <ContextMenuItem inset className="pl-[8px]">
                              Add to Library
                            </ContextMenuItem>
                            <ContextMenuSub>
                              <ContextMenuSubTrigger inset className="pl-[8px]">
                                Add to Playlist
                              </ContextMenuSubTrigger>
                              <ContextMenuSubContent className="w-48">
                                <ContextMenuItem>
                                  <CirclePlus className="mr-2 h-4 w-4" />
                                  New Playlist{" "}
                                </ContextMenuItem>
                                <ContextMenuSeparator />
                                {playlist.map((playlist: PlayList) => (
                                  <ContextMenuItem key={playlist.id}>
                                    <ListMusic className="mr-2 h-4 w-4" />
                                    {playlist.name}
                                  </ContextMenuItem>
                                ))}
                              </ContextMenuSubContent>
                            </ContextMenuSub>
                            <ContextMenuSeparator />
                            <ContextMenuItem inset className="pl-[8px]">
                              Play Next
                            </ContextMenuItem>
                            <ContextMenuItem inset className="pl-[8px]">
                              Play After
                            </ContextMenuItem>
                            <ContextMenuItem inset className="pl-[8px]">
                              Create Station
                            </ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuItem inset className="pl-[8px]">
                              Like
                            </ContextMenuItem>
                            <ContextMenuItem inset className="pl-[8px]">
                              Share
                            </ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                        <div key={list.id}>
                          <p className="mt-[0.5rem] text-sm">{list.title}</p>
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
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
