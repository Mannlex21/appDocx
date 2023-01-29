import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {
  Docx,
  ProfesionalExperience,
  Section,
} from '../../interfaces/docx.interface';
import { TypeTemplate } from '../../enums/type.enum';
import { ComponentDirective } from '../../component.directive';

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
  };
  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.route.queryParams.subscribe((params) => {
      this.data = JSON.parse(params['params']);
      console.log(this.data);
    });
  }

  sanitazerText(item: Section) {
    let r;
    switch (item.contentHTML.type) {
      case TypeTemplate.ProfesionalExperience:
        r = item.contentHTML.content as ProfesionalExperience;
        console.log(r);
        return this.sanitizer.bypassSecurityTrustHtml(r.body);

      default:
        r = item.contentHTML.content as string;
        return this.sanitizer.bypassSecurityTrustHtml(r);
    }
  }

  loadComponent() {
    // this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    // const adItem = this.ads[this.currentAdIndex];
    // const viewContainerRef = this.adHost.viewContainerRef;
    // viewContainerRef.clear();
    // const componentRef = viewContainerRef.createComponent<AdComponent>(
    //   adItem.component
    // );
    // componentRef.instance.data = adItem.data;
  }
}
