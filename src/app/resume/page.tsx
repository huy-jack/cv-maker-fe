"use client";
import ResumeLayout from "./components/layout";
import PageWrapper from "./components/pageWrapper";
import AcademicSection from "./templates/academicSection";
import ExperienceSection from "./templates/experienceSection";
import IntroSection from "./templates/introSection";
import SummarySection from "./templates/summarySection";

export default function ResumePage() {
  const summaryContent =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias natus ullam reiciendis nostrum pariatur asperiores esse inventore? Ab cum necessitatibus reiciendis, facere quibusdam accusantium fugit voluptatibus nihil aliquid officia beatae!";
  return (
    <>
      <ResumeLayout>
        <PageWrapper>
          <IntroSection />
          <SummarySection content={summaryContent} />
          <ExperienceSection />
          <AcademicSection />
        </PageWrapper>
      </ResumeLayout>
    </>
  );
}
