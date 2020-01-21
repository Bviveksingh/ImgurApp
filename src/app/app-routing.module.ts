import { ViewPhotosComponent } from './view-photos/view-photos.component';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'add-photo', component:AddPhotoComponent},
  {path:'photos', component: ViewPhotosComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
