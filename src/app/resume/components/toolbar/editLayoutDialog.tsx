import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import useSectionsStore from "../../store/sections.store";
import { Pencil } from "lucide-react";

export default function EditLayoutButton() {
  const { sections } = useSectionsStore();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDialog = () => setIsOpen(true);
  const handleCloseDialog = () => setIsOpen(false);

  return (
    <>
      <Button variant="outline" disabled={sections.length === 0} onClick={handleOpenDialog}>
        <Pencil />
        <span>Edit Layout</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="min-w-[70rem] max-h-[40rem] overflow-auto text-center">
          <DialogHeader>
            <DialogTitle className="text-[2rem] text-center">Edit Layout</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Drag and drop sections to reorder them. You can also click on a section to toggle its visibility.
          </DialogDescription>
          <div className="flex flex-col gap-2">
            {sections.map((section) => (
              <Card key={section.id} className="col-span-1">
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
