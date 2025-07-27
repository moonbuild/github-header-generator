import { create } from 'zustand';

type EditorState = {
  mainText: string;
  highlightedText: string;
  backgroundColor: string;
  textColor: string;

  setMainText: (text: string) => void;
  setHighlightedText: (text: string) => void;
  setBackgroundColor: (hex: string) => void;
  setTextColor: (hex: string) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
  mainText: 'ME•DEV MOURYA•PRANAY DEV•ME',
  highlightedText: 'MOURYA•PRANAY',
  backgroundColor: '#e7dfda',
  textColor: '#3b8391',

  setMainText: (text) => set({ mainText: text }),
  setHighlightedText: (text) => set({ highlightedText: text }),
  setBackgroundColor: (hex) => set({ backgroundColor: hex }),
  setTextColor: (hex) => set({ textColor: hex }),
}));
