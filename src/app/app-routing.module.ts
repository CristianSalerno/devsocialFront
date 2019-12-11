import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProjectProfileComponent } from './project-profile/project-profile.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { RegisterFieldsComponent } from './register-fields/register-fields.component';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditEmailComponent } from './edit-email/edit-email.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home', component: HeroComponent, children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  { path: 'profile', component: ProfileComponent },
  {
    path: 'profile/edit', component: EditProfileComponent, children: [
      { path: 'pass', component: EditPasswordComponent },
      { path: 'email', component: EditEmailComponent }
    ]
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/profile/:pId', component: ProjectProfileComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'fields', component: RegisterFieldsComponent },
  { path: 'idea', component: NewIdeaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
