"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";

export default function AddSectionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Section
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[70rem] max-h-[40rem] overflow-auto text-center">
        <DialogHeader>
          <DialogTitle className="text-[2rem] text-center">
            Add a new section
          </DialogTitle>
          <p className="text-center">
            Click on a section to add it to your resume
          </p>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-5">
          {[1, 1, 1, 1, 1].map(() => {
            return (
              <Card>
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
