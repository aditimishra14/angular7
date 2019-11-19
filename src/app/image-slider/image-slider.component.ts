import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  public imagesUrl;
  //@ViewChild('nav', '') slider: NgImageSliderComponent;
  imageObject: Array<object> = [{
     image: 'assets/images/download.png',
    // thumbImage: 'assets/img/slider/1_min.jpeg',
     alt: 'alt of image',
     title: 'title of image'
}, {
    // image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
    // thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
    // title: 'Image title', //Optional: You can use this key if want to show image with title
    // alt: 'Image alt' //Optional: You can use this key if want to show image with alt
}
];

  // prevImageClick() {
  //     this.slider.prev();
  // }
  
  // nextImageClick() {
  //     this.slider.next();
  // }

  
  constructor() { }
 
  ngOnInit() {
    console.log('hello')
   //this.imageObject = ('app/assets/download.png');

   this.imagesUrl = ['assets/download.png', 'assets/download.png', 'assets/download.png'];
  }

}
