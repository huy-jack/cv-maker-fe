import React from "react";
import RichTextEditorDialog from "./richTextEditorDialog";
import Toolbar from "./toolbar";

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenDialog = () => setIsOpen(true);

  return (
    <>
      <div className="min-h-screen flex">
        {/* Fixed Panel */}
        <Toolbar />
        {/* Main Content with Offset */}
        <div className="flex-1">{children}</div>
      </div>
      <RichTextEditorDialog isOpen={isOpen} />
    </>
  );
}
