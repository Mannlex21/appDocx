import { Injectable } from '@angular/core';
import { ComponentItem } from './component-item';
import { TemplatePExperienceComponent } from './components/template-pexperience/template-pexperience.component';
import { TypeTemplate } from './enums/type.enum';
import { TemplateTextComponent } from './components/template-text/template-text.component';

@Injectable()
export class ComponentService {
  getComponent(type: TypeTemplate, data: any) {
    switch (type) {
      case TypeTemplate.ProfesionalExperience:
        return new ComponentItem(TemplatePExperienceComponent, data);
      case TypeTemplate.Text:
        return new ComponentItem(TemplateTextComponent, data);
      default:
        return new ComponentItem(TemplateTextComponent, data);
    }
  }
}
