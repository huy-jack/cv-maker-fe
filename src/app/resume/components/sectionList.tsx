import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getSections } from "@/services";
import { Sections } from "@/types";
import { useEffect, useState } from "react";

export default function SectionList() {
  const [sections, setSections] = useState<Sections>([]);

  useEffect(() => {
    getSections().then((res) => {
      setSections(res);
    });
  }, []);

  const handleCardClick = () => {};

  return (
    <div className="grid grid-cols-3 gap-5">
      {sections.map((item) => {
        return (
          <Card key={item.id} className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={handleCardClick}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        );
      })}
    </div>
  );
}
