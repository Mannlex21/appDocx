import { Component, Input } from '@angular/core';
import {
  Profile,
  Education,
  Section,
} from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  @Input()
  data!: Section;
  content: Education[] = [];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as Education[];
  }

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
