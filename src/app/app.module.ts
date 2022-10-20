import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './componentes/employee/employee-create/employee-create.component';
import { EmployeeEditComponent } from './componentes/employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './componentes/employee/employee-list/employee-list.component';
import { HomeComponent } from './componentes/homes/home/home.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { RestApiService } from "./services/rest-api.service";
import { EmployeeDetailsComponent } from './componentes/employee/employee-details/employee-details.component';
import { UserHomeComponent } from './componentes/homes/user-home/user-home.component';
import { DepartmentHomeComponent } from './componentes/homes/department-home/department-home.component';
import { CreateDepartmentComponent } from './componentes/Departament/create-department/create-department.component';
import { ListDepartmentComponent } from './componentes/Departament/list-department/list-department.component';
import { EditDepartmentComponent } from './componentes/Departament/edit-department/edit-department.component';
import { DetailsDepartmentComponent } from './componentes/Departament/details-department/details-department.component';
import { RestApiDepartmentsService } from './services/rest-api-departments.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    UserHomeComponent,
    DepartmentHomeComponent,
    CreateDepartmentComponent,
    ListDepartmentComponent,
    EditDepartmentComponent,
    DetailsDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [RestApiService, RestApiDepartmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
