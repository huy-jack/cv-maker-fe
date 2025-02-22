import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
interface RichTextEditorDialogProps {
  isOpen: boolean;
}

export default function RichTextEditorDialog({ isOpen }: RichTextEditorDialogProps) {
  return (
    <Dialog open={isOpen} aria-labelledby="dialog-title" aria-describedby="dialog-description">
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
