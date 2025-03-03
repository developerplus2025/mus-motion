"use client";

import { useState, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
} from "draft-js";
import "draft-js/dist/Draft.css";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Heading1,
  Heading2,
  Video,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

const VideoDecorator = (props: any) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  const videoId = url.split("v=")[1]?.split("&")[0];
  return (
    <div className="my-2 flex justify-center">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video"
        allowFullScreen
        className="rounded-lg border shadow-md"
      />
    </div>
  );
};

const blockRendererFn = (block: any) => {
  if (block.getType() === "atomic") {
    return {
      component: VideoDecorator,
      editable: false,
    };
  }
  return null;
};

export default function YouTubeTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const editorRef = useRef<Editor>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTimeout(() => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    }, 100);
  }, []);

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const insertVideo = () => {
    const url = prompt("Enter YouTube video URL:");
    if (!url) return;
    const contentState = editorState.getCurrentContent();
    const contentWithEntity = contentState.createEntity("VIDEO", "IMMUTABLE", {
      url,
    });
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      "apply-entity",
    );
    setEditorState(RichUtils.toggleBlockType(newEditorState, "atomic"));
  };

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Card className="rounded-lg border shadow-sm dark:bg-black">
        <div className="flex flex-wrap items-center gap-1 border-b bg-muted/50 p-2 dark:border dark:bg-black">
          <Button
            variant="ghost"
            size="icon"
            onClick={insertVideo}
            title="Insert YouTube Video"
          >
            <Video className="h-4 w-4" />
          </Button>
          <div className="flex-1"></div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
        <CardContent className="p-4 dark:bg-black">
          <div className="min-h-[300px] border p-3 focus-within:ring-1 focus-within:ring-ring dark:border dark:bg-black dark:text-gray-200">
            <Editor
              ref={editorRef}
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Start typing..."
              spellCheck={true}
              blockRendererFn={blockRendererFn}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
