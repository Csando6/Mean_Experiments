import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { FormOrderComponent } from './form-order/form-order.component';
import { FormOneComponent } from './form-order/form-one/form-one.component';

@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    FileUploadComponent,
    MakeOrderComponent,
    FormOrderComponent,
    FormOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
