import React from "react";
import ToolBar from "./toolBar";

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Panel */}
      <ToolBar />
      {/* Main Content with Offset */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
