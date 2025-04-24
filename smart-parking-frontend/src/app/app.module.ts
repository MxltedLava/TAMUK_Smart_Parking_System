import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';  // Importing AppComponent
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,  // Declare AppComponent here
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // other modules
  ],
  providers: [],
  bootstrap: [AppComponent]  // Set AppComponent as the root component
})
export class AppModule { }
