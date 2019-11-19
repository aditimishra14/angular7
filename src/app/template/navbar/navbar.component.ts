import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public imagesUrl;
  constructor() { }

  ngOnInit() {
  
    this.imagesUrl = ['assets/download.png', 'assets/download.png', 'assets/download.png'];
  }

}
