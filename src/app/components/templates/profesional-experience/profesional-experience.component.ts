import { Component, Input, OnInit } from '@angular/core';
import {
  ProfesionalExperience,
  Section,
} from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-pexperience',
  templateUrl: './profesional-experience.component.html',
})
export class ProfesionalExperienceComponent implements OnInit {
  @Input()
  data!: Section;
  content: ProfesionalExperience[] = [];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as ProfesionalExperience[];
  }

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
