import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AddSectionDialog from "./addSectionDialog";

interface ResumeLayoutProps {
  children: React.ReactNode;
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <div className="min-h-screen flex">
      {/* Fixed Panel */}
      <Card className="w-[12rem] p-4 fixed m-5 overflow-y-auto">
        <h2 className="font-semibold mb-4">Tool Bar</h2>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Section
        </Button>
      </Card>
      <AddSectionDialog />

      {/* Main Content with Offset */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
