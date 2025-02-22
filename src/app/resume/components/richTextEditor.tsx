"use client";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Italic,
  List,
  Quote,
  Underline,
} from "lucide-react";
import { useCallback, useState } from "react";
import {
  BaseEditor,
  Descendant,
  Editor,
  Transforms,
  createEditor,
} from "slate";

import { withHistory } from "slate-history";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
// Custom types for Slate
type CustomElement = {
  type:
    | "paragraph"
    | "code"
    | "quote"
    | "bulleted-list"
    | "numbered-list"
    | "list-item";
  align?: string;
  children: CustomText[];
};

type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

type CustomEditor = BaseEditor & ReactEditor;

declare module "slate" {
  interface CustomTypes {
    Editor: CustomEditor;
    Element: CustomElement;
    Text: CustomText;
  }
}

type Format = "bold" | "italic" | "underline" | "code";
type BlockType =
  | "paragraph"
  | "code"
  | "quote"
  | "bulleted-list"
  | "numbered-list";
type Alignment = "left" | "center" | "right" | "justify";

interface ToolbarButtonProps {
  format: Format | BlockType | Alignment;
  icon: React.ComponentType<any>;
  active?: boolean;
  onMouseDown: (event: React.MouseEvent) => void;
}

const ToolbarButton = ({
  format,
  icon: Icon,
  active,
  onMouseDown,
}: ToolbarButtonProps) => {
  return (
    <Toggle
      size="sm"
      pressed={active}
      onMouseDown={onMouseDown}
      className={cn("h-8 w-8 p-0", active && "bg-muted text-muted-foreground")}
    >
      <Icon className="h-4 w-4" />
    </Toggle>
  );
};

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "Start typing here..." }],
  },
];

const RichTextEditor = () => {
  const [editor] = useState(() => withHistory(withReact(createEditor())));
  const [slateValue, setSlateValue] = useState<Descendant[]>(initialValue);
  const [isEditing, setIsEditing] = useState(true);

  const renderElement = useCallback((props: any) => {
    const { attributes, children, element } = props;

    const style = element.align ? { textAlign: element.align } : {};

    switch (element.type) {
      case "code":
        return (
          <pre {...attributes} className="bg-muted p-2 rounded">
            <code>{children}</code>
          </pre>
        );
      case "quote":
        return (
          <blockquote
            {...attributes}
            className="border-l-4 border-muted pl-4 italic"
            style={style}
          >
            {children}
          </blockquote>
        );
      case "bulleted-list":
        return (
          <ul {...attributes} className="list-disc list-inside" style={style}>
            {children}
          </ul>
        );
      case "numbered-list":
        return (
          <ol
            {...attributes}
            className="list-decimal list-inside"
            style={style}
          >
            {children}
          </ol>
        );
      case "list-item":
        return (
          <li {...attributes} style={style}>
            {children}
          </li>
        );
      default:
        return (
          <p {...attributes} style={style}>
            {children}
          </p>
        );
    }
  }, []);

  const renderLeaf = useCallback((props: any) => {
    let { attributes, children, leaf } = props;

    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
      children = <em>{children}</em>;
    }
    if (leaf.underline) {
      children = <u>{children}</u>;
    }
    if (leaf.code) {
      children = <code className="bg-muted px-1 rounded">{children}</code>;
    }

    return <span {...attributes}>{children}</span>;
  }, []);

  const toggleMark = (format: Format) => {
    const isActive = isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const toggleBlock = (format: BlockType) => {
    const isActive = isBlockActive(editor, format);
    const isList = format === "bulleted-list" || format === "numbered-list";

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        !Editor.isEditor(n) &&
        "type" in n &&
        ["bulleted-list", "numbered-list"].includes(n.type as string),
      split: true,
    });

    const newProperties: Partial<CustomElement> = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };

    Transforms.setNodes(editor, newProperties);

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  const toggleAlign = (alignment: Alignment) => {
    const isActive = isAlignActive(editor, alignment);
    Transforms.setNodes(
      editor,
      { align: isActive ? undefined : alignment },
      { match: (n) => "type" in n && n.type !== "code" }
    );
  };

  const isMarkActive = (editor: CustomEditor, format: Format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const isBlockActive = (editor: CustomEditor, format: BlockType) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && "type" in n && n.type === format,
    });
    return !!match;
  };

  const isAlignActive = (editor: CustomEditor, align: Alignment) => {
    const [match] = Editor.nodes(editor, {
      match: (n) => "align" in n && n.align === align,
    });
    return !!match;
  };

  return (
    <>
      <Slate
        editor={editor}
        initialValue={slateValue}
        onChange={(value) => {
          setSlateValue(value);
        }}
      >
        {isEditing && (
          <div className="border-b mb-4 pb-2 flex flex-wrap gap-1">
            <ToolbarButton
              format="bold"
              icon={Bold}
              active={isMarkActive(editor, "bold")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark("bold");
              }}
            />
            <ToolbarButton
              format="italic"
              icon={Italic}
              active={isMarkActive(editor, "italic")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark("italic");
              }}
            />
            <ToolbarButton
              format="underline"
              icon={Underline}
              active={isMarkActive(editor, "underline")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark("underline");
              }}
            />
            <ToolbarButton
              format="code"
              icon={Code}
              active={isMarkActive(editor, "code")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleMark("code");
              }}
            />
            <div className="w-px h-8 bg-border mx-1" />
            <ToolbarButton
              format="bulleted-list"
              icon={List}
              active={isBlockActive(editor, "bulleted-list")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleBlock("bulleted-list");
              }}
            />
            <ToolbarButton
              format="quote"
              icon={Quote}
              active={isBlockActive(editor, "quote")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleBlock("quote");
              }}
            />
            <div className="w-px h-8 bg-border mx-1" />
            <ToolbarButton
              format="left"
              icon={AlignLeft}
              active={isAlignActive(editor, "left")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign("left");
              }}
            />
            <ToolbarButton
              format="center"
              icon={AlignCenter}
              active={isAlignActive(editor, "center")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign("center");
              }}
            />
            <ToolbarButton
              format="right"
              icon={AlignRight}
              active={isAlignActive(editor, "right")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign("right");
              }}
            />
            <ToolbarButton
              format="justify"
              icon={AlignJustify}
              active={isAlignActive(editor, "justify")}
              onMouseDown={(e) => {
                e.preventDefault();
                toggleAlign("justify");
              }}
            />
          </div>
        )}

        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Start typing..."
          className="min-h-[200px] focus:outline-none"
          spellCheck
          onClick={() => setIsEditing(true)}
          readOnly={!isEditing}
        />
      </Slate>
      {isEditing && <Button onClick={() => setIsEditing(false)}>Save</Button>}
    </>
  );
};

export default RichTextEditor;
