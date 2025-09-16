import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/class/title';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  title:Title;
  
  
  constructor() { }

  ngOnInit(): void {

   
  }

}
