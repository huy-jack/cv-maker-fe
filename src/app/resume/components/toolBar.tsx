import { Card } from "@/components/ui/card";
import AddSectionDialog from "./addSectionDialog";

export default function ToolBar() {
  return (
    <>
      <Card className="w-[12rem] p-4 fixed m-5 overflow-y-auto">
        <h2 className="font-semibold mb-4">Tool Bar</h2>
        <AddSectionDialog />
      </Card>
    </>
  );
}
