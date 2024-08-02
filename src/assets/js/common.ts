import { readable, writable } from 'svelte/store';
import timeZones from '@/data/timeZones.json';

// MousePosition

interface MousePosition {
  x: number;
  y: number;
}

export const mousePosition = readable<MousePosition>({ x: 0, y: 0 }, (set) => {
  if (typeof window !== 'undefined') {
    const move = (event: MouseEvent) => set({ x: event.clientX, y: event.clientY });

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }
});

// DeviceOrientation

interface DeviceOrientation {
  alpha: any;
  beta: any;
  gamma: any;
}

export const deviceOrientation = readable<DeviceOrientation>({ alpha: null, beta: null, gamma: null }, (set) => {
  const orientation = (event: DeviceOrientationEvent) => {
    set({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma
    });
  };

  window.addEventListener('deviceorientation', orientation);

  return () => {
    window.removeEventListener('deviceorientation', orientation);
  };
});


// ScreenSize

interface ScreenSize {
  width: number;
  height: number;
}

export const screenSize = readable<ScreenSize>(
  {
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  },
  (set) => {
    if (typeof window !== 'undefined') {
      const updateSize = () => set({ width: window.innerWidth, height: window.innerHeight });

      window.addEventListener('resize', updateSize);
      return () => window.removeEventListener('resize', updateSize);
    }
  }
);

// Random Number

export const randomNumber = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ProjectHover 

interface ProjectHover {
  title: string;
  tags: Array<string>;
}

export const projectHover = writable<ProjectHover>({
  title: '',
  tags: []
});

// Current Time

function getTimeZoneCode() {
  let code = 'UTC';
  if (typeof Intl !== 'undefined') {
    const dateTime = Intl.DateTimeFormat().resolvedOptions().timeZone;
    timeZones.forEach((zone) => {
      if (zone.timeZone.includes(dateTime)) {
        code = zone.code;
      }
    });
  }
  return code;
}

interface Time {
  time: string;
  timeZoneCode?: string;
}

export const currentTime = readable<Time>({ time: new Date().toLocaleTimeString(), timeZoneCode: getTimeZoneCode() }, (set) => {
  const interval = setInterval(() => set({ time: new Date().toLocaleTimeString(), timeZoneCode: getTimeZoneCode() }), 1000);
  return () => clearInterval(interval);
});