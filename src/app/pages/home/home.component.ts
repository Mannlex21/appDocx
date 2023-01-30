import { Component, ViewChild } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { FileUpload } from 'primeng/fileupload';
import { Router } from '@angular/router';
import { RequestDocx } from '../../interfaces/request-docx.interface';
import { TypeTemplate } from '../../enums/type.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @ViewChild('primeFileUpload') primeFileUpload: FileUpload | undefined;
  progress: number = 0;
  file?: File;
  request: RequestDocx[] = [
    {
      keySeparator: '<resume>',
      title: 'Resume',
      type: {
        value: TypeTemplate.Profile,
        separator: '<name>',
      },
    },
    {
      keySeparator: '<prof-experience>',
      title: 'Experiencia profesional',
      type: {
        value: TypeTemplate.ProfesionalExperience,
        separator: '<employer>',
      },
    },
    {
      keySeparator: '<education>',
      title: 'Educación',
      type: {
        value: TypeTemplate.Education,
        separator: '<school>',
      },
    },
    {
      keySeparator: '<languages>',
      title: 'Idiomas',
      type: {
        value: TypeTemplate.Language,
      },
    },
    {
      keySeparator: '<courses>',
      title: 'Cursos y certificaciones',

      type: {
        value: TypeTemplate.Courses,
      },
    },
    {
      keySeparator: '<skills>',
      title: 'Conocimiento',

      type: {
        value: TypeTemplate.Skills,
      },
    },
  ];
  apiDev: string = 'http://localhost:8888/api/uploadDocx';
  apiProd: string = 'https://mannlexdocx.netlify.app/api/uploadDocx';
  constructor(private httpClient: HttpClient, private router: Router) {}

  async upload(event: any) {
    this.file = event.files.find((f: File) => f);
    if (this.file) {
      const obj = {
        keyWords: this.request,
      };
      this.uploadfile(this.file, obj);
    }
  }

  uploadfile(file: File, request: any) {
    let formParams = new FormData();
    formParams.append('request', JSON.stringify(request));
    formParams.append('image', file);

    return this.httpClient
      .post(this.apiDev, formParams, {
        reportProgress: true,
        observe: 'events',
      })
      .subscribe((event: any) => {
        switch (event.type) {
          case 1:
            if (event['loaded']) {
              this.progress = Math.round(
                (event['loaded'] * 100) / event['total']
              );
            }
            this.primeFileUpload?.onProgress.emit(this.progress);
            break;
          case HttpEventType.Sent:
            break;
          case HttpEventType.Response:
            this.progress = 0;
            this.primeFileUpload?.clear();
            if (event['status'] >= 200 && event['status'] < 300) {
              this.router.navigate(['/docx'], {
                queryParams: { params: JSON.stringify(event.body) },
              });
            } else {
              // console.error(event['status']);
              // this.primeFileUpload?.clear();
            }
            break;
          default:
            break;
        }
      });
  }

  progressReport($event: any) {
    this.primeFileUpload!.progress = $event;
  }

  onUpload($event: any) {
    this.primeFileUpload!.upload = $event;
  }
}
