import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AddSectionButton from "./addSectionDialog";
import EditLayoutButton from "./editLayoutDialog";

export default function Toolbar() {
  return (
    <>
      <Card className="w-[12rem] p-4 fixed m-5 overflow-y-auto">
        <h2 className="font-semibold mb-4">Tool Bar</h2>
        <div className="flex flex-col gap-2">
          <AddSectionButton />
          <EditLayoutButton />
        </div>
      </Card>
    </>
  );
}
