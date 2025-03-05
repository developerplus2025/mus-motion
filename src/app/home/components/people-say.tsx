import Image from "next/image";
import * as Masonry from "./masonry";
import * as React from "react";
import Activity from "./activity";
import { useStore } from "@nanostores/react";
import { $bookmarks, $likes, $reposts, $views } from "./stores";
const items = [
  {
    name: "Eric Grigorian",
    username: "Senior Software Engineer, Frontend",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "eric-grigorian",
  },
  {
    name: "Charlton Roberts",
    username: "Charlton Roberts, Product Engineering",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "charlton-roberts",
  },
  {
    name: "Jonathan Melville",
    username: "Daniel Lopes, Frontend Developer",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "jony",
  },
  // {
  //   name: "Alan Cowen",
  //   username: "Senior Software Engineer, Frontend",
  //   body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
  //   img: "alan-cowen",
  // },
  // {
  //   name: "Thomas Zahner",
  //   username: "Charlton Roberts, Product Engineering",
  //   body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
  //   img: "thomas-zahner",
  // },
  // {
  //   name: "Jason Cottrell",
  //   username: "Daniel Lopes, Frontend Developer",
  //   body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
  //   img: "jasoncottrell-sm",
  // },
  // {
  //   name: "David",
  //   username: "@david",
  //   body: "I love how customizable this app is. From themes to equalizer settings, I can adjust everything to match my preferences. Whether I want more bass or a balanced sound, this app gives me full control over my listening experience.",
  //   img: "https://avatar.vercel.sh/david",
  // },
  // {
  //   name: "Emma",
  //   username: "@emma",
  //   body: "The offline mode is a lifesaver! I can download my favorite playlists and listen to them without needing an internet connection. It's perfect for traveling or when I'm in areas with poor network coverage.",
  //   img: "https://avatar.vercel.sh/emma",
  // },
  // {
  //   name: "Frank",
  //   username: "@frank",
  //   body: "Managing playlists has never been easier. The app allows me to create, edit, and organize my playlists in just a few taps. The intuitive design makes the entire process smooth and enjoyable.",
  //   img: "https://avatar.vercel.sh/frank",
  // },
  // {
  //   name: "Grace",
  //   username: "@grace",
  //   body: "I am amazed by how well the app understands my music taste. The smart recommendations suggest songs that perfectly match my preferences, helping me discover new artists and tracks that I genuinely enjoy.",
  //   img: "https://avatar.vercel.sh/grace",
  // },
  // {
  //   name: "Hannah",
  //   username: "@hannah",
  //   body: "Seamless device syncing is one of my favorite features. I can start listening on my laptop and continue right where I left off on my phone. It's incredibly convenient and enhances my music experience.",
  //   img: "https://avatar.vercel.sh/hannah",
  // },
  // {
  //   name: "Isaac",
  //   username: "@isaac",
  //   body: "Unlike other music apps, this one supports a wide range of audio formats. I can play all my music files without needing to convert them, which is a huge plus for someone who has an extensive collection.",
  //   img: "https://avatar.vercel.sh/isaac",
  // },
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "The equalizer settings are simply amazing. I can fine-tune the sound exactly how I like it. Whether I'm in the mood for deep bass or clear vocals, this app lets me adjust the audio experience to perfection.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  // {
  //   name: "Kelly",
  //   username: "@kelly",
  //   body: "Battery efficiency is impressive. Unlike some other apps that drain my battery quickly, this one is well-optimized, allowing me to enjoy my music for hours without worrying about my phone running out of power.",
  //   img: "https://avatar.vercel.sh/kelly",
  // },
  // {
  //   name: "Leo",
  //   username: "@leo",
  //   body: "Dark mode is a game-changer! It’s easy on the eyes, especially at night. The sleek design and color scheme make the app look even more premium and enjoyable to use.",
  //   img: "https://avatar.vercel.sh/leo",
  // },
  // {
  //   name: "Mia",
  //   username: "@mia",
  //   body: "As an audiophile, I appreciate that this app supports high-resolution audio. It allows me to experience music at its best quality, bringing out every detail in my favorite songs.",
  //   img: "https://avatar.vercel.sh/mia",
  // },
  // {
  //   name: "Noah",
  //   username: "@noah",
  //   body: "Gesture controls make navigating the app so much more intuitive. Swiping to change tracks or adjust the volume feels natural and responsive, making my music experience even smoother.",
  //   img: "https://avatar.vercel.sh/noah",
  // },
  // {
  //   name: "Olivia",
  //   username: "@olivia",
  //   body: "The built-in radio feature is incredible! I can explore a variety of stations and discover new music from different genres without even having to search for songs manually.",
  //   img: "https://avatar.vercel.sh/olivia",
  // },
  // {
  //   name: "Paul",
  //   username: "@paul",
  //   body: "Having both music and podcast support in the same app is fantastic. I no longer need to switch between different apps, making my listening experience more convenient and enjoyable.",
  //   img: "https://avatar.vercel.sh/paul",
  // },
  // {
  //   name: "Quinn",
  //   username: "@quinn",
  //   body: "The integrated lyrics feature is one of my favorites. I love being able to sing along to my favorite songs without having to search for the lyrics separately.",
  //   img: "https://avatar.vercel.sh/quinn",
  // },
  // {
  //   name: "Ryan",
  //   username: "@ryan",
  //   body: "Frequent updates keep improving the app. It’s great to see that the developers actually listen to user feedback and continue to add new features and fix bugs regularly.",
  //   img: "https://avatar.vercel.sh/ryan",
  // },
  // {
  //   name: "Sophia",
  //   username: "@sophia",
  //   body: "The user community is amazing! I can share my playlists with friends, discover new music, and even interact with other users who have similar tastes in music.",
  //   img: "https://avatar.vercel.sh/sophia",
  // },
  // {
  //   name: "Tom",
  //   username: "@tom",
  //   body: "Cross-platform support is one of the best features of this app. I can use it seamlessly on my Windows PC, MacBook, iPhone, and Android device without any issues.",
  //   img: "https://avatar.vercel.sh/tom",
  // },
  // {
  //   name: "Uma",
  //   username: "@uma",
  //   body: "The best part? No annoying ads! Unlike other apps that constantly interrupt my music, this one provides a truly immersive and uninterrupted listening experience.",
  //   img: "https://avatar.vercel.sh/uma",
  // },
];

export function PeopleSay() {
  const reposts = useStore($reposts);
  const bookmarks = useStore($bookmarks);
  const likes = useStore($likes);
  const views = useStore($views);
  return (
    <div className="flex flex-col gap-[4rem]">
      <div className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
        <p>What People Say ?</p>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-[2rem]">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex-cols gap relative flex w-[400px] flex-col justify-between gap-1 rounded-lg border bg-[#0c0c0c] p-4 text-card-foreground shadow-sm"
          >
            {/* <div className="absolute -left-[10px] -top-[10px] h-[10px] w-[10px] border-b border-r"></div>
              <div className="absolute -right-[10px] -top-[10px] h-[10px] w-[10px] border-b border-l"></div>
              <div className="absolute -bottom-[10px] -left-[10px] h-[10px] w-[10px] border-r border-t"></div>
              <div className="absolute -bottom-[10px] -right-[10px] h-[10px] w-[10px] border-l border-t"></div> */}
            <div className="flex justify-between gap-2 text-sm leading-tight sm:text-base">
              <div className="flex items-center gap-2">
                <div>
                  <Image
                    alt={item.img}
                    src={`/${item.img}.avif`}
                    width={"50"}
                    height={"50"}
                    className="h-[30px] w-[40px]"
                  ></Image>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <p className="text-md">{item.name}</p>
                  <p className="text-sm text-[#a1a1a1]">@{item.username}</p>
                </div>
              </div>
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
                  d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-md text-white">&quot;{item.body}&quot;</span>
            <Activity
              className="~px-0/16"
              likes={likes.count}
              onLike={$likes.toggle}
              liked={likes.hasIncremented}
              reposts={reposts.count}
              onRepost={$reposts.toggle}
              reposted={reposts.hasIncremented}
              bookmarks={bookmarks.count}
              onBookmark={$bookmarks.toggle}
              bookmarked={bookmarks.hasIncremented}
              views={views.count}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
