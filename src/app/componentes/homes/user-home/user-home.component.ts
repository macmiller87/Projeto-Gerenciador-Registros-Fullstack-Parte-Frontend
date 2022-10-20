import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html'
})

export class UserHomeComponent implements OnInit {

  tituloComp: string = "User Registry";

  constructor() { }

  ngOnInit(): void {
  }

}
