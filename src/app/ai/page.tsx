
import OpenAI from "openai"
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input"

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Chat } from "@/components/chat";
import { SidebarApp } from "@/components/sidebar-app";
// const openai = new OpenAI({
//   dangerouslyAllowBrowser: true,
//   baseURL: "https://api.deepseek.com",
//   apiKey: "sk-3e619bee68db4eb3bec1563601760504",
  
//  })

export default async function AiPage() {
  //  const completion = await openai.chat.completions.create({
  //    model: "deepseek-chat",
  //    messages: [
  //    {
  //       "role": "system",
  //       "content": "You are a helpful assistant."
  //     }
  //    ]
  //  })

  //  console.log(completion.choices[0].message)
  return(
    <SidebarProvider>
    <SidebarApp />
    <SidebarInset className="flex flex-col h-screen overflow-y-auto">
      <header className="sticky top-0 flex h-14 shrink-0 items-center gap-2 bg-background">
        <div className="flex flex-1 items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage className="line-clamp-1">
                  Project Management & Task Tracking
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <Chat />
    </SidebarInset>
  </SidebarProvider>
);
}