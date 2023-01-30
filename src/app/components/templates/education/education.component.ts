import { Component, Input } from '@angular/core';
import { Profile, Education } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
})
export class EducationComponent {
  @Input()
  data!: Education[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
