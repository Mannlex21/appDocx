import { Component, Input, OnInit } from '@angular/core';
import { Profile, Section } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-text',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input()
  data!: Section;
  content!: Profile;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.content = this.data.contentHTML.content as Profile;
  }

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
