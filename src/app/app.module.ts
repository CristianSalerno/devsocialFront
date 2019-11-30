import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFieldsComponent } from './register-fields/register-fields.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ProfileComponent,
    RegisterFormComponent,
    RegisterFieldsComponent
=======
    NavbarComponent,
    HeroComponent
>>>>>>> 5a6ee9f26ae35e2b4512e5b7e1c1cb76e6045433
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
