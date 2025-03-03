"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState, useEffect, useRef } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  ContentBlock,
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
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

export default function RichTextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );
  const [editorLoaded, setEditorLoaded] = useState(false);
  const editorRef = useRef<Editor>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setEditorLoaded(true);

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

  // Kiểm tra block có phải code không
  const blockRendererFn = (block: ContentBlock) => {
    if (block.getType() === "code-block") {
      return {
        component: CodeBlock,
        editable: false, // Không cho chỉnh sửa trực tiếp code
      };
    }
    return null;
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const toggleBlockType = (blockType: string) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  const isBlockActive = (blockType: string) => {
    const selection = editorState.getSelection();
    const blockKey = selection.getStartKey();
    const block = editorState.getCurrentContent().getBlockForKey(blockKey);
    return block.getType() === blockType;
  };

  const isInlineStyleActive = (style: string) => {
    const currentStyle = editorState.getCurrentInlineStyle();
    return currentStyle.has(style);
  };

  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    localStorage.setItem("draftEditorContent", JSON.stringify(rawContent));
    alert("Content saved!");
  };

  const loadContent = () => {
    const savedContent = localStorage.getItem("draftEditorContent");
    if (savedContent) {
      const rawContent = JSON.parse(savedContent);
      const contentState = convertFromRaw(rawContent);
      setEditorState(EditorState.createWithContent(contentState));
    }
  };

  useEffect(() => {
    if (editorLoaded) {
      const savedContent = localStorage.getItem("draftEditorContent");
      if (savedContent) {
        try {
          const rawContent = JSON.parse(savedContent);
          const contentState = convertFromRaw(rawContent);
          setEditorState(EditorState.createWithContent(contentState));
        } catch (e) {
          console.error("Error loading saved content", e);
        }
      }
    }
  }, [editorLoaded]);

  if (!editorLoaded) {
    return <div>Loading editor...</div>;
  }

  return (
    <div className="mx-auto max-w-4xl p-4">
      <Card className="rounded-lg border shadow-sm dark:bg-black">
        <div className="flex flex-wrap items-center gap-1 rounded-t-lg border-b bg-muted/50 p-2 dark:border dark:bg-black">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleInlineStyle("BOLD")}
            className={`${isInlineStyleActive("BOLD") ? "bg-muted dark:bg-[#272727]" : ""} dark:hover:bg-bg-[#272727] dark:text-gray-200`}
            title="Bold"
          >
            <Bold className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleInlineStyle("ITALIC")}
            className={`${isInlineStyleActive("ITALIC") ? "bg-muted dark:bg-[#272727]" : ""} dark:hover:bg-bg-[#272727] dark:text-gray-200`}
            title="Italic"
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleInlineStyle("UNDERLINE")}
            className={`${isInlineStyleActive("UNDERLINE") ? "bg-muted dark:bg-[#272727]" : ""} dark:hover:bg-bg-[#272727] dark:text-gray-200`}
            title="Underline"
          >
            <Underline className="h-4 w-4" />
          </Button>

          <Separator
            orientation="vertical"
            className="mx-1 h-6 dark:bg-black"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("header-one")}
            className={`${isBlockActive("header-one") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Heading 1"
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("header-two")}
            className={`${isBlockActive("header-two") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Heading 2"
          >
            <Heading2 className="h-4 w-4" />
          </Button>

          <Separator
            orientation="vertical"
            className="mx-1 h-6 dark:bg-black"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("unordered-list-item")}
            className={`${isBlockActive("unordered-list-item") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Bullet List"
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("ordered-list-item")}
            className={`${isBlockActive("ordered-list-item") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Numbered List"
          >
            <ListOrdered className="h-4 w-4" />
          </Button>

          <Separator
            orientation="vertical"
            className="mx-1 h-6 dark:bg-black"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("left")}
            className={`${isBlockActive("left") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Align Left"
          >
            <AlignLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("center")}
            className={`${isBlockActive("center") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Align Center"
          >
            <AlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => toggleBlockType("right")}
            className={`${isBlockActive("right") ? "bg-muted dark:bg-[#272727]" : ""} dark:text-gray-200 dark:hover:bg-[#272727]`}
            title="Align Right"
          >
            <AlignRight className="h-4 w-4" />
          </Button>

          <Separator
            orientation="vertical"
            className="mx-1 h-6 dark:bg-black"
          />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              const url = prompt("Enter link URL:");
              if (url) {
                const contentState = editorState.getCurrentContent();
                const selection = editorState.getSelection();
                const contentWithEntity = contentState.createEntity(
                  "LINK",
                  "MUTABLE",
                  { url },
                );
                const entityKey = contentWithEntity.getLastCreatedEntityKey();
                const newEditorState = EditorState.push(
                  editorState,
                  contentWithEntity,
                  "apply-entity",
                );
                setEditorState(
                  RichUtils.toggleLink(newEditorState, selection, entityKey),
                );
              }
            }}
            className="dark:text-gray-200 dark:hover:bg-[#272727]"
            title="Insert Link"
          >
            <Link className="h-4 w-4" />
          </Button>

          <div className="flex-1"></div>

          <Button
            variant="outline"
            size="sm"
            onClick={saveContent}
            className="ml-auto dark:border dark:text-gray-200 dark:hover:bg-[#272727]"
          >
            Save
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={loadContent}
            className="dark:border dark:text-gray-200 dark:hover:bg-[#272727]"
          >
            Load
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="dark:text-gray-200 dark:hover:bg-[#272727]"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>

        <CardContent className="rounded-lg p-4 dark:bg-[#131313]">
          <div
            className="min-h-[300px] rounded-md border p-3 focus-within:ring-1 focus-within:ring-ring dark:border dark:bg-black dark:text-gray-200"
            onClick={() => {
              if (editorRef.current) {
                editorRef.current.focus();
              }
            }}
          >
            <Editor
              ref={editorRef}
              blockRendererFn={blockRendererFn}
              editorState={editorState}
              onChange={setEditorState}
              handleKeyCommand={handleKeyCommand}
              placeholder="Start typing..."
              spellCheck={false}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
const CodeBlock = ({ block }: { block: ContentBlock }) => {
  const text = block.getText();
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {text}
    </SyntaxHighlighter>
  );
};
