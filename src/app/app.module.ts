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

<<<<<<< HEAD
import { LoginComponent } from "./login/login.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ProjectProfileComponent } from "./project-profile/project-profile.component";
import { NewIdeaComponent } from "./new-idea/new-idea.component";
import { EditPasswordComponent } from "./edit-password/edit-password.component";
import { EditEmailComponent } from "./edit-email/edit-email.component";
import { ChatBoxComponent } from "./chat-box/chat-box.component";
import { EditImageComponent } from "./edit-image/edit-image.component";
=======
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProjectProfileComponent } from './project-profile/project-profile.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditEmailComponent } from './edit-email/edit-email.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { EditImageComponent } from './edit-image/edit-image.component';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { ProjectAdmComponent } from './project-adm/project-adm.component';
import { ProjectCreatorComponent } from './project-creator/project-creator.component';
>>>>>>> b5a32ccf952d999ad6c417939e9d46cf6983bb38

/* REDUX */

/* REDUX */

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
    NewIdeaComponent,
    EditPasswordComponent,
    EditEmailComponent,
    ChatBoxComponent,
    EditImageComponent,
    PublicProfileComponent,
    ProjectAdmComponent,
    ProjectCreatorComponent
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
export class AppModule {
  constructor() {}
}
