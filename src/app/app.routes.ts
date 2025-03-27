import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/new', component: ProjectCreateComponent },
  { path: 'projects/:id/edit', component: ProjectEditComponent },
  { path: 'projects/:id/detail', component: ProjectDetailComponent },
];