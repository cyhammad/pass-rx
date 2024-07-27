"use client";

import { useEffect, useRef, useState } from "react";
import {
  blockQuoteIcon,
  boldIcon,
  centerAlignIcon,
  codeIcon,
  highlightIcon,
  horizontalRuleIcon,
  imageIcon,
  italicIcon,
  leftAlignIcon,
  orderedListIcon,
  paragraphIcon,
  redoIcon,
  rightAlignIcon,
  underlineIcon,
  undoIcon,
  unorderedListIcon,
} from "./Icons";
import InputField from "@/components/adminComponents/inputs/InputField";
import { addTopic } from "@/app/lib/actions/brickTopicActions";
import { useRouter } from "next/navigation";
import { revalidateData } from "@/app/utils/revalidate-data";

const MenuBar = ({
  token,
  brickId,
  sectionId,
  chapterId,
  topicTitle = "",
  editor,
}) => {
  if (!editor) {
    return null;
  }

  const router = useRouter();
  const imageRef = useRef(null);
  const [color, setColor] = useState("#000000");
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState(topicTitle);

  const handleImageInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (editor) {
      const content = editor.getHTML();
      const contentJSON = String(editor.getJSON());
      const res = await addTopic(
        token,
        title,
        content,
        brickId,
        sectionId,
        chapterId,
        contentJSON,
      );
      const resObj = JSON.parse(res);
      if (resObj.message == "Created successfully") {
        revalidateData("/admin/bricks/[brickId]", true);
        router.push(`/admin/bricks/${brickId}`);
      }
    }
  };

  useEffect(() => {
    if (image != null) {
      editor.chain().focus().setImage({ src: image, alt: "IMAGE" }).run();
    }
  }, [image]);
  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:gap-0">
      <div className="editor-menu flex flex-wrap gap-2 lg:border-r lg:border-black/20 lg:pr-10">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`${editor.isActive("bold") ? "is-active" : ""}`}
        >
          {boldIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`${editor.isActive("italic") ? "is-active" : ""}`}
        >
          {italicIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-2 py-1 text-lg line-through ${editor.isActive("strike") ? "is-active" : ""}`}
        >
          {underlineIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-2 py-1 text-lg line-through ${editor.isActive("strike") ? "is-active" : ""}`}
        >
          S
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${editor.isActive("codeBlock") ? "is-active" : ""}`}
        >
          {codeIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`${editor.isActive("highlight") ? "is-active" : ""}`}
        >
          {highlightIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${editor.isActive("paragraph") ? "is-active" : ""}`}
        >
          {paragraphIcon}
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${editor.isActive("heading", { level: 1 }) ? "is-active" : ""}`}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${editor.isActive("heading", { level: 2 }) ? "is-active" : ""}`}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${editor.isActive("heading", { level: 3 }) ? "is-active" : ""}`}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`${editor.isActive("heading", { level: 4 }) ? "is-active" : ""}`}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`${editor.isActive("heading", { level: 5 }) ? "is-active" : ""}`}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`${editor.isActive("heading", { level: 6 }) ? "is-active" : ""}`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          {leftAlignIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          {centerAlignIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          {rightAlignIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${editor.isActive("bulletList") ? "is-active" : ""}`}
        >
          {unorderedListIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${editor.isActive("orderedList") ? "is-active" : ""}`}
        >
          {orderedListIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${editor.isActive("blockquote") ? "is-active" : ""}`}
        >
          {blockQuoteIcon}
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          {horizontalRuleIcon}
        </button>
        <input
          type="color"
          name="colorselect"
          id="colorselect"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
            editor.chain().focus().setColor(e.target.value).run();
          }}
          className="h-9 w-10 cursor-pointer rounded bg-transparent p-1 hover:border hover:border-primary hover:bg-[#2396f320]"
        />
        <input
          className="hidden"
          ref={imageRef}
          type="file"
          name="image"
          id="image"
          accept="image/*"
          onChange={(e) => handleImageInput(e)}
        />
        <button className="p-1" onClick={() => imageRef.current.click()}>
          {imageIcon}
        </button>
        <button onClick={() => editor.chain().focus().undo().run()}>
          {undoIcon}
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          {redoIcon}
        </button>
      </div>
      <div className="relative flex items-center gap-3 py-2 lg:pl-12">
        <InputField
          title={"Topic Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          id="title"
          titleClassName="bg-[#FAFAFA]"
          inputClassName="w-full"
          containerClassName="w-full"
          name="title"
        />
        <button
          className="w-fit rounded-md bg-primary px-8 py-4 text-white"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
