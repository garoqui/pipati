import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesetComponent } from './components/gameset/gameset.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameset/:id', component: GamesetComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }