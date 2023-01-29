import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-text',
  templateUrl: './template-text.component.html',
})
export class TemplateTextComponent implements OnInit {
  @Input() data: any;
  ngOnInit(): void {
    console.log(this.data);
  }
}
