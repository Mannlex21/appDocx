import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Docx } from '../../interfaces/docx.interface';

@Component({
  selector: 'app-docx',
  templateUrl: './docx.component.html',
})
export class DocxComponent {
  data: Docx = {
    sections: [],
    body: '',
    header: '',
    footer: '',
    error: [],
  };
  showModal: boolean = false;
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['params']);
      if (this.data.error.length > 0) {
        this.showModal = true;
        console.warn(
          `There are ${this.data.error.length} error, It could generate an error in the document`
        );
      }
    });
  }

  hideModal() {}
}
