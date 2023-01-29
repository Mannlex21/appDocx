import { TypeTemplate } from '../enums/type.enum';

export interface Docx {
  sections: Section[];
  body: string;
  header: string;
  footer: string;
}

export interface Section {
  title: string;
  name: string;
  contentText: string;
  contentHTML: ContentHTML;
  order: number;
}

export interface ContentHTML {
  type: TypeTemplate;
  content: ProfesionalExperience | string;
}

export interface ProfesionalExperience {
  first: string;
  second: string;
  third: string;
  body: string;
}
