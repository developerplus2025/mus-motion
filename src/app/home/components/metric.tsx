import Image from "next/image"
import { RadaChart1 } from "./rada-chart-1"
import { LoopAnimation } from "./loop-animation"

const items = [
    {
        id:1,
        src:"horizontal",
        name:"",

    },
    {
        id:2,
        src:"jakala",
        name:"",

    },
    {
        id:3,
        src:"codal",
        name:"",

    },
    {
        id:4,
        src:"avanade",
        name:"",

    },
]
export default function Metric() {
    return (
        <div className="flex flex-col items-center gap-[2rem]">
            <LoopAnimation/>
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[3.5rem] leading-[4.5rem] w-[750px] font-bold text-center tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">Flora by the Numbers</h1>
                <span className="md:text-md max-w-[500px] text-center text-zinc-500 dark:text-zinc-400">See why musicians and producers trust our music software! From the number of satisfied users to tracks created, these metrics highlight the impact our software is making in the music industry. Join a growing community of creators producing faster and smarter with our software.</span>
            </div>
            <div className="flex justify-between items-center ">
                <RadaChart1/>
                <RadaChart1/>
            </div>
            
        </div>
    )
}