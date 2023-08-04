import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { TopComponent } from './components/topbar/top/top.component';
import { SearchComponent } from './components/topbar/search/search.component';
import { LogoComponent } from './components/topbar/logo/logo.component';
import { PlayerComponent } from './components/player/player.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },


];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
