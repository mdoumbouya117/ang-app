import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MaterialModule,
  MdNativeDateModule,
  MdDatepickerModule,
  MdTableModule,
  MdInputModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
// import { PhonePipe } from './shared/pipes/phone/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent
   // PhonePipe
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    MdNativeDateModule,
    MdDatepickerModule,
    MdTableModule,
    MdInputModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
