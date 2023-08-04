import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { TopComponent } from './components/topbar/top/top.component';
import { SearchComponent } from './components/topbar/search/search.component';
import { LogoComponent } from './components/topbar/logo/logo.component';
import { PlayerComponent } from './components/player/player.component';
import { MostPlayedComponent } from './components/most-played/most-played.component';
import { MostFieldGoalsComponent } from './components/most-field-goals/most-field-goals.component';
import { MostTwoFieldGoalsComponent } from './components/most-two-field-goals/most-two-field-goals.component';
import { MostThreeFieldGoalsComponent } from './components/most-three-field-goals/most-three-field-goals.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'most-played', component: MostPlayedComponent },
  { path: 'most-field-goals', component: MostFieldGoalsComponent },
  { path: 'most-two-field-goals', component: MostTwoFieldGoalsComponent },
  { path: 'most-three-field-goals', component: MostThreeFieldGoalsComponent },


];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
