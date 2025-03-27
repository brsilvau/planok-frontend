import { Routes } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectCreateComponent } from './pages/project-create/project-create.component';
import { ProjectEditComponent } from './pages/project-edit/project-edit.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { AuthGuard } from './guards/auth.guard';

export const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'projects', component: ProjectListComponent, canActivate: [AuthGuard] },
  { path: 'projects/new', component: ProjectCreateComponent, canActivate: [AuthGuard] },
  { path: 'projects/:id/edit', component: ProjectEditComponent, canActivate: [AuthGuard] },
  { path: 'projects/:id/detail', component: ProjectDetailComponent, canActivate: [AuthGuard] },
];