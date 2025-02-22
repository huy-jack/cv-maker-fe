"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

export default function AddSectionDialog() {
  const [open, setOpen] = useState(false);

  const handleCardClick = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Section
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[70rem] max-h-[40rem] overflow-auto text-center">
        <DialogHeader>
          <DialogTitle className="text-[2rem] text-center">Add a new section</DialogTitle>
          <p className="text-center">Click on a section to add it to your resume</p>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-5">
          {[1].map((_, index) => {
            return (
              <Card key={index} className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleCardClick}>
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
}
