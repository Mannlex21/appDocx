import { Injectable } from '@angular/core';
import { ComponentItem } from '../shared/component-item';
import { ProfesionalExperienceComponent } from '../components/templates/profesional-experience/profesional-experience.component';
import { TypeTemplate } from '../enums/type.enum';
import { ProfileComponent } from '../components/templates/profile/profile.component';
import { SkillsComponent } from '../components/templates/skills/skills.component';
import { EducationComponent } from '../components/templates/education/education.component';
import { LanguageComponent } from '../components/templates/language/language.component';
import { CoursesCertificationComponent } from '../components/templates/courses-certification/courses-certification.component';

@Injectable()
export class ComponentService {
  getComponent(type: TypeTemplate, data: any) {
    switch (type) {
      case TypeTemplate.ProfesionalExperience:
        return new ComponentItem(ProfesionalExperienceComponent, data);
      case TypeTemplate.Profile:
        return new ComponentItem(ProfileComponent, data);
      case TypeTemplate.Skills:
        return new ComponentItem(SkillsComponent, data);
      case TypeTemplate.Education:
        return new ComponentItem(EducationComponent, data);
      case TypeTemplate.Language:
        return new ComponentItem(LanguageComponent, data);
      case TypeTemplate.Courses:
        return new ComponentItem(CoursesCertificationComponent, data);
      default:
        return new ComponentItem(ProfileComponent, data);
    }
  }
}
