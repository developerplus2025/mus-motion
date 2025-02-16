import Image from "next/image"
import { RadaChart1 } from "./rada-chart-1"

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
        <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[3.5rem] leading-[4.5rem] w-[750px] font-bold text-center tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">Trusted by Musicians and Producers Worldwide</h1>
                <span className="md:text-md max-w-[500px] text-center text-zinc-500 dark:text-zinc-400">This software is trusted by professionals in the music industry, from independent artists to top recording studios. Discover why so many creators rely on it to streamline their workflow and produce high-quality music. Join a community that’s making music smarter today!</span>
            </div>
            <div className="flex justify-between items-center w-[500px]">
                <RadaChart1/>
                <RadaChart1/>
            </div>
            
        </div>
    )
}