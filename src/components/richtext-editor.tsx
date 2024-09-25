"use client";
import dynamic from "next/dynamic";
import { useMemo, useRef, useState } from "react";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

interface RichTextEditorProps {
  initialHtmlString?: string;
  onChange: (htmlString: string) => void;
}

const options = [
  "bold",
  "italic",
  "|",
  "ul",
  "ol",
  "|",
  "fontsize",
  "|",
  "outdent",
  "indent",
  "align",
  "|",
  "hr",
  "|",
  "fullsize",
  "brush",
  "|",
  "table",
  "link",
  "|",
  "undo",
  "redo",
  "image",
];

export default function RichTextEditor({
  initialHtmlString = "",
  onChange,
}: RichTextEditorProps) {
  const editorRef = useRef(null);
  const [value, setValue] = useState(initialHtmlString);

  const config = useMemo(
    () => ({
      width: "auto",
      height: "auto",
      minHeight: 400,
      language: "auto",
      placeholder: "Start typing...",
      readonly: false,
      defaultActionOnEnter: "insert_as_html" as const,
      defaultActionOnPaste: "insert_as_html" as const,
      spellcheck: true,
      toolbar: true,
      buttons: options,
      enter: "div" as `div`,
      statusbar: false,
      toolbarAdaptive: false,
      createAttributes: {
        table: {
          style:
            "border: 1px solid #C5C6C8FF; border-collapse: collapse; width: 100%;",
        },
        tr: { style: "border: 1px solid #C5C6C8FF; padding: 8px" },
        td: { style: "border: 1px solid #C5C6C8FF; padding: 8px" },
      },
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  );

  const handleEditorChange = (htmlString: string) => {
    setValue(htmlString);
    onChange(htmlString);
  };

  return (
    <JoditEditor
      ref={editorRef}
      value={value}
      config={config}
      onChange={handleEditorChange}
    />
  );
}
