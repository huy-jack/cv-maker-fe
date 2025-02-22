import SectionHeader from "../components/sectionHeader";

interface SummarySectionProps {
  content: string;
  onClick?: () => void;
}
export default function SummarySection({ content }: SummarySectionProps) {
  return (
    <section className="mb-8">
      <SectionHeader title="Summary" />
      <p>{content}</p>
    </section>
  );
}
