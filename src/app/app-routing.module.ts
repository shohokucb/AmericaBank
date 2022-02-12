import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroclientesComponent } from './components/registroclientes/registroclientes.component';
import { EditarclientesComponent } from './components/editarclientes/editarclientes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registroclientes', component: RegistroclientesComponent },
  { path: 'editarclientes', component: EditarclientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
