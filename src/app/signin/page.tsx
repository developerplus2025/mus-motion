import { GalleryVerticalEnd } from "lucide-react";

import { LoginForm } from "./components/login-form";
import Image from "next/image";
import { TextLoop } from "@/components/ui/text-loop";
import { Typewriter } from "@/components/type-writer";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { cn } from "@/lib/cn";

const prompts = [
  "Chat with your data.",
  "Create marketing campaigns.",
  "Write Python code.",
  "Explain complex topics.",
  "Brainstorm ideas.",
];

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block">
        {/* <Image
          src="/placeholder.svg"
          alt="Image"
          width={"20"}
          height={"20"}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        /> */}
        <div className="absolute inset-0 h-full w-full bg-white text-center">
          {/* <TextLoop className="top-1/2 -translate-y-1/2 text-center text-4xl font-bold">
            <span>How can I assist you today?</span>
            <span>Generate a logo</span>
            <span>Create a component</span>
            <span>Draw a diagram</span>
          </TextLoop> */}
          {/* <Typewriter prompts={prompts} /> */}
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden border-l bg-background md:shadow-xl">
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
              Welcome Back
            </p>
            <InteractiveGridPattern
              className={cn(
                "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
