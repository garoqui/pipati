import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesetComponent } from './components/gameset/gameset.component';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'gameset/:id', component: GamesetComponent },
  { path: 'help', component: HelpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
