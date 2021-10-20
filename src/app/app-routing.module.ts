import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClientComponent } from './add-client/add-client.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HomeComponent } from './home/home.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListemployeesComponent } from './listemployees/listemployees.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { UpdateEmpolyeeComponent } from './update/update-empolyee/update-empolyee.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent },
  {path:"" , component:HomeComponent },
  {path:"addEmp" , component:AddemployeeComponent },
  {path:"listEmp",component:ListemployeesComponent},
  {path:"update/:id",component:UpdateEmpolyeeComponent},
  {path:"addC" , component:AddClientComponent },
  {path:"listC",component:ListClientComponent},
  {path:"updateC/:id",component:UpdateClientComponent},
  {path:"**",component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
