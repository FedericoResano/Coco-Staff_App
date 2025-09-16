import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/shared/class/title';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  pageTitle: Title ={
    title: 'Inicio'
  } ;

  constructor(private http: HttpClient) { }
 
  

  ngOnInit(): void {
    
  }

}
