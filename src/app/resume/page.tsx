"use client";
import ResumeLayout from "./components/layout";
import PageWrapper from "./components/pageWrapper";
import useSectionsStore from "./store/sections.store";

export default function ResumePage() {
  const summaryContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias natus ullam reiciendis nostrum pariatur asperiores esse inventore? Ab cum necessitatibus reiciendis, facere quibusdam accusantium fugit voluptatibus nihil aliquid officia beatae!";
  const { sections } = useSectionsStore();
  return (
    <>
      <ResumeLayout>
        <PageWrapper>{sections.map((section) => section.content)}</PageWrapper>
      </ResumeLayout>
    </>
  );
}
