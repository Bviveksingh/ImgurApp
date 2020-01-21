import { ImageService } from './../image.service';
import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {

  private imageTitle:string;
  private imageDescription:string;
  private imageFile: File;
  constructor(private imageService:ImageService,@Inject(DOCUMENT) private document:Document) { }

  ngOnInit() {
  }

  imageInputChange(imageInput:any){
    this.imageFile = imageInput.files[0];
  }

  addImage(){
    
    let infoObject = {
      title: this.imageTitle,
      description:this.imageDescription
    }
    this.imageService.uploadImage(this.imageFile,infoObject);
    
    this.imageTitle = "";
    this.imageDescription = "";
  }
  
    
}
