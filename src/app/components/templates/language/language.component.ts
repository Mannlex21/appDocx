import { Component, OnInit, Input } from '@angular/core';
import { Section, Language } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
})
export class LanguageComponent implements OnInit {
  @Input()
  data!: Section;
  content!: Language[];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as Language[];
  }
}
