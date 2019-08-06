import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MakeOrderComponent } from './make-order/make-order.component';
import { FormOrderComponent } from './form-order/form-order.component';


const routes: Routes = [
  {path: 'imageupload', component: FileUploadComponent},
  {path: 'orderupload', component: MakeOrderComponent},
  {path: 'formorder', component: FormOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
