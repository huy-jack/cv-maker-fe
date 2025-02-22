// src/app/resume/store.tsx
import { create } from "zustand";

interface OpenStateSlice {
  isOpen: boolean;
  toggleOpenState: () => void;
}

const useOpenStateStore = create<OpenStateSlice>((set) => ({
  isOpen: false,
  toggleOpenState: () =>
    set((state: OpenStateSlice) => ({ isOpen: !state.isOpen })),
}));

export default useOpenStateStore;
