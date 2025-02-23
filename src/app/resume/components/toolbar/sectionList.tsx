import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loadingSpinner";
import { getSections } from "@/services";
import { Sections } from "@/types";
import { JSX, useEffect, useState } from "react";
import useSectionsStore from "../../store/sections.store";
import IntroSection from "../../templates/introSection";
import ExperienceSection from "../../templates/experienceSection";
import AcademicSection from "../../templates/academicSection";
import SummarySection from "../../templates/summarySection";

export default function SectionList({ setOpen }: { setOpen: (open: boolean) => void }) {
  const [sections, setSections] = useState<Sections>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { addSection } = useSectionsStore();

  useEffect(() => {
    getSections().then((res) => {
      setSections(res);
      setLoading(false);
    });
  }, []);

  const sectionMap: { [key: number]: JSX.Element } = {
    1: <IntroSection />,
    2: <ExperienceSection />,
    3: <AcademicSection />,
    4: <SummarySection />,
  };

  const handleCardClick = (item: Sections[number]) => {
    if (sectionMap[item.id]) {
      addSection({
        id: item.id,
        title: item.title,
        description: item.description,
        content: sectionMap[item.id],
      });
      setOpen(false);
    }
  };

  const listSections = () => {
    return (
      <div className="grid grid-cols-3 gap-5">
        {sections.map((item) => (
          <Card
            key={item.id}
            className="cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={() => handleCardClick(item)}
          >
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <>
      {loading && (
        <div className="mx-auto">
          <LoadingSpinner />
        </div>
      )}
      {!loading && listSections()}
    </>
  );
}
