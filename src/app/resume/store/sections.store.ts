import { JSX } from "react";
import { create } from "zustand";

interface Section {
  id: number;
  title: string;
  description: string;
  content: JSX.Element;
}

interface SectionsStore {
  sections: Section[];
  addSection: (section: Section) => void;
}

const useSectionsStore = create<SectionsStore>((set) => {
  return {
    sections: [],
    addSection: (section: Section) => set((state) => ({ sections: [...state.sections, section] })),
  };
});

export default useSectionsStore;
