import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImageSwitcherComponent } from './image-switcher/image-switcher.component';


@NgModule({
  declarations: [
    AppComponent,
    ImageSwitcherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
