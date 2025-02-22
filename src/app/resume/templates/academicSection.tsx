import { Building2 } from "lucide-react";
import SectionHeader from "../components/sectionHeader";

export default function AcademicSection() {
  return (
    <section>
      <SectionHeader title="Academic Background" />
      <div className="flex items-start">
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8 rounded text-blue-600" />
            <div>
              <h2 className="text-lg font-bold">Rikkeisoft</h2>
              <p className="text-gray-600">11/2024 - Present</p>
            </div>
          </div>
          <div>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                Bachelor of Science - Computer Science in the collaboration with
                American Degree Program (ADP)
              </li>
            </ul>
          </div>
        </div>

        <div
          className="text-center px-4 w-40 ml-8"
          style={{ borderLeft: "2px solid black" }}
        >
          <div>GPA</div>
          <strong className="text-lg">
            <strong className="text-blue-600">3.87</strong> / 4.0
          </strong>
        </div>
      </div>
    </section>
  );
}
