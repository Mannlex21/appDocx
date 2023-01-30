import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  @Input()
  data!: Skills[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}
}
