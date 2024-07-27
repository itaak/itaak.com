import { writable } from 'svelte/store';
import type { ProjectType } from "@/types/project";

function Theme() {
  const { subscribe, set, update } = writable({
    theme: 'light',
    colorBody: '',
    color: ''
  });

  return {
    subscribe,
    toggleTheme: () => {
      update(state => {
        const newTheme = state.theme === 'light' ? 'grey' : 'light';
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        return { ...state, theme: newTheme, colorBody: "" };
      });
    },

    setTheme: (theme: ProjectType['theme'][number]) => {
      localStorage.setItem('colorBody', theme.color);
      update(state => ({ ...state, colorBody: theme.colorBody, color: theme.color }));
    },

    init: () => {
      const savedTheme = localStorage.getItem('theme') || 'light';
      const savedColorBody = localStorage.getItem('colorBody') || '';
      const savedColor = localStorage.getItem('color') || '';
      document.documentElement.setAttribute('data-theme', savedTheme);
      set({ theme: savedTheme, colorBody: savedColorBody, color: savedColorBody });
    }
  };
}

export const theme = Theme();
