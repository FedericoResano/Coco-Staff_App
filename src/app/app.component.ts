import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Coco Staff';
  currentIndex = 0;
  images: string[] = [];
  imagesLoaded = false;
  constructor(private http: HttpClient){}
  

ngOnInit(){
  
    this.http.get<string[]>('assets/images.json').subscribe(data => {
      this.images = data;
      this.imagesLoaded = true;
    });

    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // cambia cada 5 segundos
    
}
}


