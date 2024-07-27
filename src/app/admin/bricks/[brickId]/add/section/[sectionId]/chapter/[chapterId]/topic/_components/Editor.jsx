"use client";

import "./styles.css";
import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import ListItem from "@tiptap/extension-list-item";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, EditorProvider, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
import { useSearchParams } from "next/navigation";
import Placeholder from "@tiptap/extension-placeholder";

const extensions = [
  Placeholder.configure({
    placeholder: "Start typing here...",
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Highlight,
  Underline,
  Image.configure({
    allowBase64: true,
    inline: true,
  }),
];

export default ({
  token,
  brickId,
  sectionId,
  chapterId,
  topicId,
  title,
  content,
  isUpdate = false,
}) => {
  const editor = useEditor({
    extensions,
    content,
  });

  return (
    <>
      <MenuBar
        token={token}
        brickId={brickId}
        sectionId={sectionId}
        chapterId={chapterId}
        topicTitle={title}
        isUpdate={isUpdate}
        editor={editor}
      />
      <EditorContent editor={editor} />
    </>
  );
};
