import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./componentes/homes/home/home.component";

import { UserHomeComponent } from './componentes/homes/user-home/user-home.component';
import { EmployeeCreateComponent } from "./componentes/employee/employee-create/employee-create.component";
import { EmployeeEditComponent } from "./componentes/employee/employee-edit/employee-edit.component";
import { EmployeeListComponent } from "./componentes/employee/employee-list/employee-list.component";
import { EmployeeDetailsComponent } from './componentes/employee/employee-details/employee-details.component';

import { DepartmentHomeComponent } from './componentes/homes/department-home/department-home.component';
import { CreateDepartmentComponent } from './componentes/Departament/create-department/create-department.component';
import { EditDepartmentComponent } from './componentes/Departament/edit-department/edit-department.component';
import { ListDepartmentComponent } from './componentes/Departament/list-department/list-department.component';
import { DetailsDepartmentComponent } from './componentes/Departament/details-department/details-department.component';

const routes: Routes = [

  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },

  { path: "user-home", component: UserHomeComponent },
  { path: "employee-create", component: EmployeeCreateComponent },
  { path: "employee-edit/:id", component: EmployeeEditComponent },
  { path: "employees-list", component: EmployeeListComponent },
  { path: "employee-details/:id", component: EmployeeDetailsComponent },

  { path: "department-home", component: DepartmentHomeComponent },
  { path: "department-create", component: CreateDepartmentComponent },
  { path: "department-edit/:id", component: EditDepartmentComponent },
  { path: "departments-list", component: ListDepartmentComponent },
  { path: "departments-details/:id", component: DetailsDepartmentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
