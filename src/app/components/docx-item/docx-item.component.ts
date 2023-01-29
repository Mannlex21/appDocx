import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TypeTemplate } from 'src/app/enums/type.enum';
import { Section } from '../../interfaces/docx.interface';
import { ComponentDirective } from '../../component.directive';
import { TemplateComponent } from '../../interfaces/template-component.interface';
import { TemplatePExperienceComponent } from '../template-pexperience/template-pexperience.component';
import { ComponentItem } from '../../component-item';
import { ComponentService } from '../../component.service';

@Component({
  selector: 'app-docx-item',
  templateUrl: './docx-item.component.html',
})
export class DocxItemComponent implements OnInit {
  @ViewChild(ComponentDirective, { static: true })
  componentHost!: ComponentDirective;
  @Input('item') section: Section = {
    title: '',
    name: '',
    contentText: '',
    contentHTML: {
      type: TypeTemplate.Text,
      content: '',
    },
    order: 0,
  };
  template: ComponentItem = {
    component: ComponentItem,
    data: undefined,
  };
  constructor(private componentService: ComponentService) {}
  ngOnInit(): void {
    this.template = this.componentService.getComponent(
      this.section.contentHTML.type,
      this.section.contentHTML.content
    );
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    console.log(this.template);
    const componentRef = viewContainerRef.createComponent<TemplateComponent>(
      this.template.component
    );
    componentRef.instance.data = this.template.data;
  }
}
