import { Component, Input, OnInit } from '@angular/core';
import { ProfesionalExperience } from '../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-pexperience',
  templateUrl: './template-pexperience.component.html',
})
export class TemplatePExperienceComponent implements OnInit {
  @Input()
  data!: ProfesionalExperience[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    console.log(this.data);
  }

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
