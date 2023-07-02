import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramiteUnoComponent } from './tramite-uno/tramite-uno.component';
import { TramiteDosComponent } from './tramite-dos/tramite-dos.component';
import { TramiteTresComponent } from './tramite-tres/tramite-tres.component';
import { MainComponent } from './main/main.component';
import { TramitesComponent } from './tramites/tramites.component';

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'home', component: MainComponent},
  {path: 'tramite1', component: TramiteUnoComponent},
  {path: 'tramite2', component: TramiteDosComponent},
  {path: 'tramite3', component: TramiteTresComponent},
  {path: 'signup', component: TramiteUnoComponent},
  {path: 'tramites', component: TramitesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
