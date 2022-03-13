import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SignupModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
