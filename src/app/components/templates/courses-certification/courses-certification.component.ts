import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Course } from 'src/app/interfaces/docx.interface';
import { Section } from '../../../interfaces/docx.interface';

@Component({
  selector: 'app-courses-certification',
  templateUrl: './courses-certification.component.html',
})
export class CoursesCertificationComponent {
  @Input()
  data!: Section;
  content!: Course[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as Course[];
    console.log(this.data.contentHTML.content);
  }
}
