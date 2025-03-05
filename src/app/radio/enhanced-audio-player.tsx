"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Shuffle,
  Repeat,
  Repeat1Icon as RepeatOne,
} from "lucide-react";
import { cn } from "@/lib/utils";

type Track = {
  id: number;
  title: string;
  artist: string;
  duration: number;
  src: string;
};

const playlist: Track[] = [
  {
    id: 1,
    title: "Phap Ta Ba",
    artist: "Ed Sheeran",
    duration: 233,
    src: "/audio/kw04scrx7h.mp3",
  },
  {
    id: 2,
    title: "Sunflower",
    artist: "Post Malone & Swae Lee",
    duration: 158,
    src: "/audio/DaiDienHauSinhTuKienLouisRemix-VuongNgocManh-14125736.mp3",
  },
  {
    id: 3,
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    src: "/audio/tawerrw6f4.mp3",
  },
  {
    id: 4,
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: 233,
    src: "/audio/y2mate.com2.mp3",
  },
];

export default function EnhancedAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<"off" | "all" | "one">("off");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hoverTime, setHoverTime] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("ended", handleTrackEnd);

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, []);

  const togglePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTrackEnd = async () => {
    if (repeatMode === "one") {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        try {
          await audio.play();
        } catch (error) {
          console.error("Error replaying audio:", error);
          setIsPlaying(false);
        }
      }
    } else if (
      repeatMode === "all" ||
      currentTrackIndex < playlist.length - 1
    ) {
      playNextTrack();
    } else {
      setIsPlaying(false);
    }
  };

  const onProgressChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = value[0];
    setCurrentTime(value[0]);
  };

  const onVolumeChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = value[0];
    setVolume(value[0]);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const playNextTrack = () => {
    const nextIndex = isShuffled
      ? Math.floor(Math.random() * playlist.length)
      : (currentTrackIndex + 1) % playlist.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
  };

  const playPreviousTrack = () => {
    const prevIndex = isShuffled
      ? Math.floor(Math.random() * playlist.length)
      : (currentTrackIndex - 1 + playlist.length) % playlist.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
  };

  const toggleShuffle = () => setIsShuffled(!isShuffled);

  const toggleRepeat = () => {
    const modes: ("off" | "all" | "one")[] = ["off", "all", "one"];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  const currentTrack = playlist[currentTrackIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const playAudio = async () => {
      audio.src = currentTrack.src;
      audio.load(); // Explicitly load the new audio
      if (isPlaying) {
        try {
          await audio.play();
        } catch (error) {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        }
      }
    };

    playAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [currentTrack.src, isPlaying]);

  return (
    <Card className="w-[400px] bg-gradient-to-br from-zinc-900 to-black text-white">
      <CardContent className="p-6">
        <div className="mb-4 aspect-square w-full overflow-hidden rounded-md bg-zinc-800 shadow-lg">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Album Cover"
            className="h-full w-full object-cover"
          />
        </div>
        <h2 className="mb-1 text-2xl font-bold">{currentTrack.title}</h2>
        <p className="mb-4 text-sm text-zinc-400">{currentTrack.artist}</p>
        <div className="mb-4 flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10"
            onClick={toggleShuffle}
          >
            <Shuffle className={cn("h-4 w-4", isShuffled && "text-white")} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10"
            onClick={playPreviousTrack}
          >
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white text-black hover:bg-zinc-200 hover:text-black"
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10"
            onClick={playNextTrack}
          >
            <SkipForward className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-white hover:bg-white/10"
            onClick={toggleRepeat}
          >
            {repeatMode === "one" ? (
              <RepeatOne className="h-4 w-4 text-white" />
            ) : (
              <Repeat
                className={cn("h-4 w-4", repeatMode === "all" && "text-white")}
              />
            )}
          </Button>
        </div>
        <div
          className="relative mb-2"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            setHoverTime(percent * duration);
          }}
          onMouseLeave={() => setHoverTime(null)}
        >
          <Slider
            value={[currentTime]}
            max={duration}
            step={0.1}
            onValueChange={onProgressChange}
            className="z-10"
          />
          {hoverTime !== null && (
            <div
              className="absolute top-[-25px] rounded bg-white px-2 py-1 text-xs text-black"
              style={{
                left: `${(hoverTime / duration) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              {formatTime(hoverTime)}
            </div>
          )}
        </div>
        <div className="mb-4 flex justify-between text-sm text-zinc-400">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <div className="mb-4 flex items-center gap-2">
          <Volume2 className="h-4 w-4 text-zinc-400" />
          <Slider
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={onVolumeChange}
            className="w-[100px]"
          />
        </div>
        <ScrollArea className="h-[100px] rounded-md border border-zinc-800 p-2">
          {playlist.map((track, index) => (
            <div
              key={track.id}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded p-2 hover:bg-zinc-800",
                index === currentTrackIndex && "bg-zinc-700",
              )}
              onClick={() => {
                setCurrentTrackIndex(index);
                setIsPlaying(true);
              }}
            >
              <div>
                <p className="font-medium">{track.title}</p>
                <p className="text-sm text-zinc-400">{track.artist}</p>
              </div>
              <span className="text-sm text-zinc-400">
                {formatTime(track.duration)}
              </span>
            </div>
          ))}
        </ScrollArea>
        <audio ref={audioRef} src={currentTrack.src} onEnded={handleTrackEnd} />
      </CardContent>
    </Card>
  );
}
