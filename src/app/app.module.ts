import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterFormComponent } from "./register-form/register-form.component";
import { RegisterFieldsComponent } from "./register-fields/register-fields.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HeroComponent } from "./hero/hero.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsComponent } from "./projects/projects.component";

import { LoginComponent } from "./login/login.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProjectProfileComponent } from "./project-profile/project-profile.component";
import { NewIdeaComponent } from "./new-idea/new-idea.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProfileComponent,
    RegisterFormComponent,
    RegisterFieldsComponent,
    FooterComponent,
    ProjectsComponent,
    LoginComponent,
    EditProfileComponent,
    ProjectProfileComponent,
    NewIdeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
