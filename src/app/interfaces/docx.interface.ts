import { TypeTemplate } from '../enums/type.enum';

export interface Docx {
  sections: Section[];
  body: string;
  header: string;
  footer: string;
  error: Error[];
}

export interface Section {
  title: string;
  keySeparator: string;
  contentText: string;
  contentHTML: ContentHTML;
  order: number;
}

export interface ContentHTML {
  type: TypeTemplate;
  content:
    | ProfesionalExperience[]
    | Profile
    | Education[]
    | Skill[]
    | Language[]
    | Course[]
    | string;
}

export interface ProfesionalExperience {
  employer: string;
  date: string;
  jobTitle: string;
  body: string;
}

export interface Profile {
  name: string;
  body: string;
}

export interface Education {
  level: string;
  schoolName: string;
  date: string;
}

export interface Skill {
  skillName: string;
  level: string;
}
export interface Language {
  language: string;
  level: string;
}
export interface Course {
  body: string;
}

export interface Error {
  code: string;
  message: string;
}
