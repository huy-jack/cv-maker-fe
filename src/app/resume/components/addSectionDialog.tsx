import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import SectionList from "./sectionList";

export default function AddSectionDialog() {
  return (
    <Dialog>
      <DialogTrigger>
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
        <SectionList />
      </DialogContent>
    </Dialog>
  );
}
