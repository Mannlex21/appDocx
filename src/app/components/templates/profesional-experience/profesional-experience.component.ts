import { Component, Input, OnInit } from '@angular/core';
import { ProfesionalExperience } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-pexperience',
  templateUrl: './profesional-experience.component.html',
})
export class ProfesionalExperienceComponent implements OnInit {
  @Input()
  data!: ProfesionalExperience[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
