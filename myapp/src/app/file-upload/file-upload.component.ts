import { Component, OnInit } from '@angular/core';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:4000/api/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  title = 'myUploadingFileApp';
  myImage = 'myapp/src/image/Antu_insert-image.svg_-846x846.jpg';

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUploaded: ', item, status, response);
      alert('file uploaded successfully');
    };
  }

}
