import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { LaptopComponent } from './laptop/laptop.component';
import { MobileComponent } from './mobile/mobile.component';
import { CoffeComponent } from './coffe/coffe.component';
import { MusicComponent } from './music/music.component';
import { GymComponent } from './gym/gym.component';

@NgModule({
  declarations: [AppComponent, LaptopComponent, MobileComponent, CoffeComponent, MusicComponent, GymComponent],
  imports: [BrowserModule, AppRoutingModule, DynamicComponentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
