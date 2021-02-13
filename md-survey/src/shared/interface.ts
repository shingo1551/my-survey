export interface Survey {
  title: string;
  questions: Question[];
}

export type Question = FA | MA | SA;

export interface FA {
  type: 'fa';
  required: boolean;
  html: string;
  placeholder: string;
  answer: { text: string };
}

export interface SA {
  type: 'sa';
  required: boolean;
  html: string;
  selections: Selection[];
  answer: { value: number; text?: string };
}

export interface MA {
  type: 'ma';
  min: number;
  html: string;
  selections: Selection[];
  answers: { value: number; text?: string }[];
}

export interface Selection {
  html: string;
  fa?: boolean;
}
