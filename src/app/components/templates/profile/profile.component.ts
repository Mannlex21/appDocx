import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../../interfaces/docx.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-template-text',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  @Input()
  data!: Profile;
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {}

  sanitazerText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
