import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html'
})

export class DepartmentHomeComponent implements OnInit {

  tituloComp: string = "Department Registry";

  constructor() { }

  ngOnInit(): void {
  }

}
