import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { DocxComponent } from './components/docx/docx.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ComponentDirective } from './component.directive';
import { TemplatePExperienceComponent } from './components/template-pexperience/template-pexperience.component';
import { DocxItemComponent } from './components/docx-item/docx-item.component';
import { ComponentService } from './component.service';
import { TemplateTextComponent } from './components/template-text/template-text.component';

@NgModule({
  declarations: [
    AppComponent,
    DocxComponent,
    HomeComponent,
    ComponentDirective,
    TemplatePExperienceComponent,
    DocxItemComponent,
    TemplateTextComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    FileUploadModule,
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent],
})
export class AppModule {}
