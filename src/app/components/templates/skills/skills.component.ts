import { Component, Input, OnInit } from '@angular/core';
import { Skill, Section } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  @Input()
  data!: Section;
  content!: Skill[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as Skill[];
  }
}
