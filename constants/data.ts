import { Day, Effect } from '~/types/types';

export const EFFECTS_DATA: Effect[] = [
  { label: 'Solid', value: '1' },
  { label: 'Pulse', value: '2' },
  { label: 'Fade', value: '3' },
  { label: 'Rainbow', value: '4' },
];

export const DAYS: Day[] = [
  { label: 'Monday', value: '1' },
  { label: 'Tuesday', value: '2' },
  { label: 'Wednesday', value: '3' },
  { label: 'Thursday', value: '4' },
  { label: 'Friday', value: '5' },
  { label: 'Saturday', value: '6' },
  { label: 'Sunday', value: '0' },
];

export const API = 'http://10.0.0.6:5000/api';
