"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import * as Slider from "@radix-ui/react-slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  PlayIcon,
  PauseIcon,
  SkipForwardIcon,
  VolumeIcon,
  Radio,
  SkipBack,
  PlayCircle,
  SkipForward,
  Pause,
  Play,
  FastForward,
  Rewind,
} from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname, useRouter } from "next/navigation";
export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [currentStation, setCurrentStation] = useState("Synthwave Nights");
  const [currentGenre, setCurrentGenre] = useState("Electronic");
  const [currentTimeMusic, setCurrentTimeMusic] = useState<string>("3:40");
  const [value, setValue] = useState<number[]>([0]);
  const [soundValue, setSoundValue] = useState<number[]>([50]);
  const [soundTempValue, setSoundTempValue] = useState<number[]>([50]);
  const [tempValue, setTempValue] = useState<number[]>([0]);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const stations = [
    { name: "Synthwave Nights", genre: "Electronic", time: "3:40" },
    { name: "Jazz Cafe", genre: "Jazz", time: "3:40" },
    { name: "Classical Serenity", genre: "Classical", time: "3:40" },
    { name: "Rock Legends", genre: "Rock", time: "3:40" },
    { name: "Hip Hop Beats", genre: "Hip Hop", time: "3:40" },
    { name: "Heart Over Mind", genre: "EDM", time: "3:40" },
    { name: "Heart Over Mind", genre: "EDM", time: "3:40" },
    { name: "Heart Over Mind", genre: "EDM", time: "3:40" },
    { name: "Heart Over Mind", genre: "EDM", time: "3:40" },
  ];

  const recentTracks = [
    { title: "Neon Cruise", artist: "RetroWave", time: "2:34" },
    { title: "Midnight Drive", artist: "SynthMaster", time: "3:45" },
    { title: "Digital Dreams", artist: "Cybernetic", time: "4:12" },
    { title: "Retro Flashback", artist: "80s Revival", time: "3:21" },
  ];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [totalSeconds, setTotalSeconds] = useState<number>(220);

  // Hàm chuyển đổi từ "phút:giây" sang giây
  const convertToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(":").map(Number);
    return minutes * 60 + seconds;
  };

  const handleConvert = () => {
    const seconds = convertToSeconds(currentTimeMusic);
    setTotalSeconds(seconds);
  };
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };
  // const handleValueCommit = (newValue: number[]) => {
  //   console.log("Giá trị cuối cùng:", newValue[0]);
  // };
  const handlemousedown = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const handlemouseup = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const router = useRouter();
  const initialTimeRef = useRef(currentTime);
  const currentTimeRef = useRef(currentTime); // Lưu giá trị currentTime
  const pathname = usePathname();

  useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [pathname]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = (Number(value) / 100) * totalSeconds;
    }
  }, [value, totalSeconds]);
  useEffect(() => {
    setSoundTempValue(soundValue);
    if (audioRef.current) {
      audioRef.current.volume = Number(soundTempValue) / 100;
    }
  }, [soundTempValue, soundValue]);
  const increaseVolume = () => {
    if (audioRef.current && audioRef.current.volume <= 1) {
      audioRef.current.volume = Math.min(1, Number(soundValue) / 100 + 0.1); // Tăng âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current && audioRef.current.volume >= 0) {
      audioRef.current.volume = Math.max(0, Number(soundValue) / 100 - 0.1); // Giảm âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); // Tính phút
    const seconds = Math.floor(time % 60); // Tính giây còn lại
    // Định dạng với 2 chữ số (ví dụ: 01:05)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  return (
    <div className="mx-auto flex h-[calc(100vh-59px)] w-full flex-col">
      <div className="flex h-[calc(100vh-129px)] w-full justify-between">
        <ScrollArea className="w-[300px] flex-shrink-0">
          <Card className="w-[300px] rounded-none border-y-0 border-l-0 border-r bg-[#000000]">
            <CardHeader>
              <CardTitle>Stations</CardTitle>
            </CardHeader>
            <CardContent className=" ">
              <ul className="space-y-4">
                {stations.map((station) => (
                  <li
                    key={station.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{station.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {station.genre}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCurrentStation(station.name);
                        setCurrentGenre(station.genre);
                        setCurrentTimeMusic(station.time);
                      }}
                    >
                      <Radio className="mr-2 h-4 w-4" />
                      Tune In
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollArea>
        <div className="flex flex-col items-center justify-center gap-[4rem]">
          <div className="flex flex-col items-center justify-center gap-[2rem]">
            <div
              className="h-[14rem] w-[14rem] rounded-lg bg-[#0c0c0c]"
              style={{
                background:
                  'url("https://avatar-ex-swe.nixcdn.com/song/2024/08/15/n/m/F/k/1723689056060_500.jpg") left center / contain no-repeat',
              }}
            >
              <audio
                id="audio"
                ref={audioRef}
                src="/tawerrw6f4.mp3"
                loop
                autoPlay
                onTimeUpdate={handleTimeUpdate}
                className="hidden"
              ></audio>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-medium">{currentStation}</h1>
              <p className="text-md text-[#a1a1a1]">{currentGenre}</p>
            </div>
          </div>
          <div className="flex gap-[1rem] rounded-lg border bg-gradient-to-tr from-black/50 to-[#121212] px-2 py-1">
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-[1.8rem] w-[1.8rem] border-none bg-transparent"
            >
              <Rewind className="h-4 w-4" />
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              className="h-[1.8rem] w-[1.8rem] border-none bg-transparent"
            >
              <SkipBack className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className={`${isPlaying ? "hidden" : "flex"} h-[1.8rem] w-[1.8rem] border-none bg-transparent`}
              onClick={() => {
                setIsPlaying(true);
                handlePlayPause();
              }}
            >
              <Play className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className={`${!isPlaying ? "hidden" : "flex"} h-[1.8rem] w-[1.8rem] border-none bg-transparent`}
              onClick={() => {
                setIsPlaying(false);
                handlePlayPause();
              }}
            >
              <Pause className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size={"icon"}
              className="h-[1.8rem] w-[1.8rem] border-none bg-transparent"
            >
              <SkipForward className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size={"icon"}
              className="h-[1.8rem] w-[1.8rem] border-none bg-transparent"
            >
              <FastForward className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <ScrollArea className="w-[300px] flex-shrink-0">
          <Card className="w-[300px] rounded-none border-y-0 border-l border-r bg-[#000000]">
            <CardHeader>
              <CardTitle>Stations</CardTitle>
            </CardHeader>
            <CardContent className=" ">
              <ul className="space-y-4">
                {stations.map((station) => (
                  <li
                    key={station.name}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium">{station.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {station.genre}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setCurrentStation(station.name);
                        setCurrentGenre(station.genre);
                        handleConvert();
                      }}
                    >
                      <Radio className="mr-2 h-4 w-4" />
                      Tune In
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </ScrollArea>
      </div>
      <div>
        <div className="flex h-[70px] w-full items-center justify-between border-t dark:border-t-[#202020]">
          <div className="flex w-[299px] items-center gap-3 pl-[1rem]">
            <div
              className="h-[2rem] w-[2rem] rounded-md bg-[#0c0c0c]"
              style={{
                background:
                  'url("https://avatar-ex-swe.nixcdn.com/song/2024/08/15/n/m/F/k/1723689056060_500.jpg") left center / contain no-repeat',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <h1 className="text-sm font-medium">{currentStation}</h1>
              <p className="text-xs text-[#a1a1a1]">{currentGenre}</p>
            </div>
          </div>
          <div className="flex w-[20rem] flex-col items-center justify-center gap-[1rem]">
            <div className="flex gap-4">
              <p className="text-xs tabular-nums">{formatTime(currentTime)}</p>
              <Slider.Root
                onValueChange={(newTempValue) => setTempValue(newTempValue)}
                onValueCommit={(newValue) => setValue(tempValue)}
                defaultValue={[0]}
                value={[(currentTime / totalSeconds) * 100]}
                max={100}
                step={1}
                className="relative flex w-[20rem] touch-none select-none items-center"
              >
                <Slider.Track
                  onMouseDown={handlemousedown}
                  onMouseUp={handlemouseup}
                  className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
                >
                  <Slider.Range className="absolute h-full bg-primary" />
                </Slider.Track>
                <Slider.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
              </Slider.Root>
              {/* <Slider
                // onValueCommit={handleValueCommit}
                onValueChange={(newValue) => setValue(newValue)} // Cập nhật liên tục
                // onValueChange={(newValue) =>
                //   handleValueChangeAndCommit(newValue, false)
                // }
                // onValueCommit={(newValue) =>
                //   handleValueChangeAndCommit(newValue, true)
                // }
                onMouseDown={handlemousedown}
                onMouseUp={handlemouseup}
                className="w-[20rem]"
                defaultValue={[0]}
                value={[(currentTime / totalSeconds) * 100]}
                max={100}
                step={1}
              /> */}
              <p className="text-xs tabular-nums">{currentTimeMusic}</p>
            </div>
          </div>
          <div className="flex w-[299px] items-center justify-center gap-[1.25rem] pr-[1rem]">
            <svg
              onClick={decreaseVolume}
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
                d="M0 5V11C0 11.5523 0.447715 12 1 12H3L10 16V0L3 4H1C0.447715 4 0 4.44772 0 5ZM13.9115 5.64655L13.5581 4.98506L12.2351 5.69195L12.5885 6.35345C12.8503 6.84344 12.9991 7.40324 12.9991 8C12.9991 8.59676 12.8503 9.15657 12.5885 9.64655L12.2351 10.3081L13.558 11.0149L13.9115 10.3534C14.2867 9.65129 14.4991 8.84933 14.4991 8C14.4991 7.15067 14.2867 6.34871 13.9115 5.64655Z"
                fill="currentColor"
              />
            </svg>
            <Slider.Root
              onValueChange={(newSoundValue) => {
                setSoundValue(newSoundValue);
              }}
              value={[Number(soundValue)]}
              max={100}
              step={1}
              className="relative flex w-[6rem] touch-none select-none items-center"
            >
              <Slider.Track
                onMouseDown={handlemousedown}
                onMouseUp={handlemouseup}
                className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
              >
                <Slider.Range className="absolute h-full bg-primary" />
              </Slider.Track>
              <Slider.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
            </Slider.Root>
            <svg
              onClick={increaseVolume}
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
                d="M0 5V11C0 11.5523 0.447715 12 1 12H3L10 16V0L3 4H1C0.447715 4 0 4.44772 0 5ZM14.2585 2.96051L14.6728 3.58567C15.5116 4.85121 16 6.3697 16 8C16 9.6303 15.5116 11.1488 14.6728 12.4143L14.2585 13.0395L13.0082 12.2108L13.4225 11.5857C14.1034 10.5582 14.5 9.32657 14.5 8C14.5 6.67343 14.1034 5.44176 13.4225 4.41433L13.0082 3.78916L14.2585 2.96051ZM12.059 4.98506L12.4125 5.64655C12.7876 6.34871 13 7.15067 13 8C13 8.84933 12.7876 9.65129 12.4125 10.3534L12.059 11.0149L10.736 10.3081L11.0895 9.64655C11.3513 9.15657 11.5 8.59676 11.5 8C11.5 7.40324 11.3513 6.84344 11.0895 6.35345L10.736 5.69195L12.059 4.98506Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
