// src/interfaces/IExperience.ts
export interface IExperience {
  position: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
  technologies?: string[];
  responsibilities?: string[];
  projects?: {
    name: string;
    url: string;
  }[];
}
