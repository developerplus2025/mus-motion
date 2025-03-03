import React from "react";
import RichTextEditor from "./rich-text-editor";
const GetInTouch = () => {
  return (
    <div className="flex flex-col gap-[4rem]">
      <div className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
        <p>What People Say ?</p>
      </div>
      <div className="flex items-center justify-center">
        <RichTextEditor />
      </div>
    </div>
  );
};

export default GetInTouch;
