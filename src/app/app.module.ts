import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFieldsComponent } from './register-fields/register-fields.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegisterFormComponent,
    RegisterFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
