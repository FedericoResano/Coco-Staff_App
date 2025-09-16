import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  routerLink: Router;

  constructor(private http: HttpClient, private router: Router) {
    this.routerLink = router;
   }
 
  

  ngOnInit(): void {
    
  }

}
