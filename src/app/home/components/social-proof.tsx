import Image from "next/image"

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
    {
        id:5,
        src:"basement",
        name:"",

    },
    {
        id:6,
        src:"altudo",
        name:"",

    },
    {
        id:7,
        src:"apply-digital",
        name:"",

    },
]
export default function SocialProof() {
    return (
        <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-4 items-center justify-center">
                <h1 className="text-[3.5rem] leading-[4.5rem] w-[750px] font-bold text-center tracking-tighter text-white sm:text-5xl xl:text-[3.5rem]">Trusted by Musicians and Producers Worldwide</h1>
                <span className="md:text-md max-w-[500px] text-center text-zinc-500 dark:text-zinc-400">This software is trusted by professionals in the music industry, from independent artists to top recording studios. Discover why so many creators rely on it to streamline their workflow and produce high-quality music. Join a community that’s making music smarter today!</span>
            </div>
            <div className="flex flex-col justify-center items-center">
<div className="grid justify-items-center gap-4 grid-cols-3">
{
    items.slice(0, 3).map((item) => (
        <div key={item.id}>
            <Image
                alt={item.src}
                width={150}
                height={80}
                className="h-[80px] w-[150px] dark:invert-[1]"
                src={`/${item.src}.svg`}
            />
        </div>
    ))
}

            </div>
            <div className="grid gap-4 justify-items-center grid-cols-4">
            {
    items.slice(3).map((item) => (
        <div key={item.id}>
            <Image
                alt={item.src}
                width={150}
                height={80}
                className="h-[80px] w-[150px] dark:invert-[1]"
                src={`/${item.src}.svg`}
            />
        </div>
    ))
}

            </div>
            </div>
            
        </div>
    )
}