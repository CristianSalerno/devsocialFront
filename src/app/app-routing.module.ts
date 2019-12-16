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
import { EditImageComponent } from './edit-image/edit-image.component';
import { UserEntryGuard } from 'guards/user-entry.guard';
import { PublicProfileComponent } from './public-profile/public-profile.component';
import { EntryProjectGuard } from 'guards/entry-project.guard';
import { ProjectCreatorComponent } from './project-creator/project-creator.component';
import { EntryCreatorGuard } from 'guards/entry-creator.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    component: HeroComponent,
    children: [{ path: 'login', component: LoginComponent }]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [UserEntryGuard]
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent,
    canActivate: [UserEntryGuard],
    children: [
      {
        path: 'pass',
        component: EditPasswordComponent,
        canActivate: [UserEntryGuard]
      },
      {
        path: 'email',
        component: EditEmailComponent,
        canActivate: [UserEntryGuard]
      },
      {
        path: 'image',
        component: EditImageComponent,
        canActivate: [UserEntryGuard]
      }
    ]
  },
  {
    path: 'profile/:idUser',
    component: PublicProfileComponent,
    canActivate: [UserEntryGuard]
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate: [UserEntryGuard]
  },
  {
    path: 'projects/profile/:pId',
    component: ProjectProfileComponent,
    canActivate: [EntryProjectGuard]
  },
  {
    path: 'projects/creator/:pId',
    component: ProjectCreatorComponent,
    canActivate: [EntryCreatorGuard]
  },
  { path: 'register', component: RegisterFormComponent },
  { path: 'fields', component: RegisterFieldsComponent },
  { path: 'idea', component: NewIdeaComponent, canActivate: [UserEntryGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
