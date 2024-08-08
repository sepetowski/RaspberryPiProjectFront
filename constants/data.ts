import { Effect } from '~/types/types';
export const EFFECTS_DATA: Effect[] = [
  { label: 'Solid', value: '1' },
  { label: 'Pulse', value: '2' },
  { label: 'Fade', value: '3' },
  { label: 'Rainbow', value: '4' },
];

export const API = 'http://192.168.0.18:5000/api/leds';
