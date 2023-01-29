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
  constructor(private httpClient: HttpClient, private router: Router) {}

  async upload(event: any) {
    this.file = event.files.find((f: File) => f);
    if (this.file) {
      const request: RequestDocx[] = [
        {
          keySeparator: 'Resumen',
          type: {
            value: TypeTemplate.Text,
          },
        },
        {
          keySeparator: 'Experiencia Profesional',
          type: {
            value: TypeTemplate.ProfesionalExperience,
            separator: 'Empresa',
          },
        },
        {
          keySeparator: 'Educación',
          type: {
            value: TypeTemplate.Text,
          },
        },
        {
          keySeparator: 'Cursos y Certificaciones',
          type: {
            value: TypeTemplate.Text,
          },
        },
        {
          keySeparator: 'Conocimientos',
          type: {
            value: TypeTemplate.List,
          },
        },
      ];
      const obj = {
        keyWords: request,
      };
      this.uploadfile(this.file, obj);
    }
  }

  uploadfile(file: File, request: any) {
    let formParams = new FormData();
    formParams.append('request', JSON.stringify(request));
    formParams.append('image', file);
    console.log(formParams);
    // http://localhost:8888/api/uploadDocx
    // https://mannlexdocx.netlify.app/api/uploadDocx
    return this.httpClient
      .post('http://localhost:8888/api/uploadDocx', formParams, {
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
              console.log(event);
              this.router.navigate(['/docx'], {
                queryParams: { params: JSON.stringify(event.body) },
              });
            } else {
              // this.onUpload.emit({ files: this.file });
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
