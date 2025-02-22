interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div>
      <h1 className="text-2xl">{title}</h1>
      <hr style={{ border: "2px solid black", marginBottom: "0.75rem" }} />
    </div>
  );
}
