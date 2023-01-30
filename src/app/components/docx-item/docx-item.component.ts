import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TypeTemplate } from 'src/app/enums/type.enum';
import { Section } from '../../interfaces/docx.interface';
import { ComponentDirective } from '../../shared/component.directive';
import { TemplateComponent } from '../../interfaces/template-component.interface';
import { ComponentItem } from '../../shared/component-item';
import { ComponentService } from '../../services/component.service';

@Component({
  selector: 'app-docx-item',
  templateUrl: './docx-item.component.html',
})
export class DocxItemComponent implements OnInit {
  @ViewChild(ComponentDirective, { static: true })
  componentHost!: ComponentDirective;
  @Input('item') section: Section = {
    title: '',
    keySeparator: '',
    contentText: '',
    contentHTML: {
      type: TypeTemplate.Profile,
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
      this.section
    );
    const viewContainerRef = this.componentHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<TemplateComponent>(
      this.template.component
    );
    componentRef.instance.data = this.template.data;
  }
}
