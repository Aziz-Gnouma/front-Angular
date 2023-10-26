import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent},
  {path: 'dash', component: DashComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
