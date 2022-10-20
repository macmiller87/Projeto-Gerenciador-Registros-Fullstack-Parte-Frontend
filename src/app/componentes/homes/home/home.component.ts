import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  tituloComp: string = "Welcome to Fullstack Project";

  constructor() { }

  ngOnInit(): void {
  }

}
