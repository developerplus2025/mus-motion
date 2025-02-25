import MainChatV2 from "./components/main";
import SideBar from "./components/side-bar";

export default function ChatV2() {
  return (
    <div className="flex h-full w-full">
      <SideBar />
      <MainChatV2 />
    </div>
  );
}
