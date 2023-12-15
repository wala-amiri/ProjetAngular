import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';

const routes: Routes = [
  { path: 'home', component: ResidencesComponentComponent },
  { path: 'addResidence', component: FormResidenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
