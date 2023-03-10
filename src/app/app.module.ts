import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './pages/character/character.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { HomeComponent } from './pages/home/home.component';
import { NavigatorComponent } from './shared/components/navigator/navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterDetailComponent,
    HomeComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule  //Importamos HttpClientModule para utilizar su servicio http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
