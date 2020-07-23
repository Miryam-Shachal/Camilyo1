import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "forms", component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
