import { ImageService } from './../image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-photos',
  templateUrl: './view-photos.component.html',
  styleUrls: ['./view-photos.component.css']
})
export class ViewPhotosComponent implements OnInit {
  images:object[] = [];
  constructor(private imageService:ImageService) { }

  ngOnInit() {
    this.getAllImages();
  }

  getAllImages(){
    this.images = this.imageService.getImages();
  }

}

