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
  content: ProfesionalExperience[] | Profile | Education[] | Skills[] | string;
}

export interface ProfesionalExperience {
  employer: string;
  date: string;
  jobTitle: string;
  body: string;
}

export interface Profile {
  body: string;
}

export interface Education {
  level: string;
  schoolName: string;
  date: string;
}

export interface Skills {
  skillName: string;
  level: string;
}

export interface Error {
  code: string;
  message: string;
}
