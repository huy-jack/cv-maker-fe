import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import SectionList from "./sectionList";

export default function AddSectionDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button asChild variant="outline" className="w-full flex items-center gap-2">
          <span>
            <PlusCircle className="h-4 w-4" />
            Add Section
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-[70rem] max-h-[40rem] overflow-auto text-center">
        <DialogHeader>
          <DialogTitle className="text-[2rem] text-center">Add a new section</DialogTitle>
        </DialogHeader>
        <DialogDescription>Click on a section to add it to your resume</DialogDescription>
        <SectionList />
      </DialogContent>
    </Dialog>
  );
}
