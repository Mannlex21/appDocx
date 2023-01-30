import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { DocxComponent } from './pages/docx/docx.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ComponentDirective } from './shared/component.directive';
import { ProfesionalExperienceComponent } from './components/templates/profesional-experience/profesional-experience.component';
import { DocxItemComponent } from './components/docx-item/docx-item.component';
import { ComponentService } from './services/component.service';
import { ProfileComponent } from './components/templates/profile/profile.component';
import { SkillsComponent } from './components/templates/skills/skills.component';
import { EducationComponent } from './components/templates/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    DocxComponent,
    HomeComponent,
    ComponentDirective,
    DocxItemComponent,
    ProfesionalExperienceComponent,
    ProfileComponent,
    SkillsComponent,
    EducationComponent,
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
