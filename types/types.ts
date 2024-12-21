export interface Rgb {
  red: number;
  green: number;
  blue: number;
}

export interface Effect {
  label: string;
  value: string;
}

export interface Day {
  label: string;
  value: string;
}

export interface Schedule {
  name: string;
  id: number;
  hour: number;
  minute: number;
  second: number;
  day: number | null;
  action: 0 | 1;
}
