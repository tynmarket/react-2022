import create from 'zustand';

interface Count {
  count: number;
  increment: () => void;
}

export const useStore = create<Count>((set) => ({
  count: 0,
  increment: () =>
    set((state) => {
      return { count: state.count + 1 };
    }),
}));
