import { Building2 } from "lucide-react";
import SectionHeader from "../components/sectionHeader";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-3 mb-8">
      <SectionHeader title="Experience" />
      <div className="flex items-center gap-3">
        <Building2 className="w-8 h-8 rounded text-blue-600" />
        <div>
          <h2 className="text-lg font-bold">Rikkeisoft</h2>
          <p className="text-gray-600">11/2024 - Present</p>
        </div>
      </div>
      <div>
        <p className="font-semibold">
          Role: <span className="font-normal">Team Leader</span>
        </p>
      </div>
      <div>
        <p className="font-semibold">
          Description:{" "}
          <span className="font-normal">
            this system (CCaaS) is a modern customer experience platform
            designed to streamline and enhance customer support interactions. It
            leverages advanced technology to provide seamless communication
            across various channels, including voice, chat, and video.
          </span>
        </p>
      </div>
      <div>
        <p className="font-semibold">
          Technology:{" "}
          <span className="font-normal">
            AngularJS, Redux, Redux Observable, Karma Jasmine, Jest
          </span>
        </p>
      </div>
      <div>
        <p className="font-semibold">Responsibility:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            Led a team of four front-end developers, offering mentorship,
            conducting code reviews, managing deployments, and providing regular
            progress updates.
          </li>
          <li>
            Successfully migrated codebase from CoffeeScript to JavaScript,
            enhancing maintainability and performance.
          </li>
          <li>
            Transitioned testing framework from Karma Jasmine to Jest, improving
            test efficiency and developer productivity.
          </li>
        </ul>
      </div>
    </section>
  );
}
