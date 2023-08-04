import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { Router, RouterModule } from '@angular/router';
import { TopComponent } from './components/topbar/top/top.component';
import { LogoComponent } from './components/topbar/logo/logo.component';
import { SearchComponent } from './components/topbar/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MostPlayedComponent } from './components/most-played/most-played.component';
import { MostFieldGoalsComponent } from './components/most-field-goals/most-field-goals.component';
import { MostTwoFieldGoalsComponent } from './components/most-two-field-goals/most-two-field-goals.component';
import { MostThreeFieldGoalsComponent } from './components/most-three-field-goals/most-three-field-goals.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    TopComponent,
    LogoComponent,
    SearchComponent,
    MostPlayedComponent,
    MostFieldGoalsComponent,
    MostTwoFieldGoalsComponent,
    MostThreeFieldGoalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
