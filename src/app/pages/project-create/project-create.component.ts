import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectState } from '../../models/enums';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class ProjectCreateComponent {
  project: Project = {
    id: '',
    nombre: '',
    descripcion: '',
    ubicacion: '',
    fecha_inicio: new Date(),
    fecha_fin: new Date(),
    estado: ProjectState.EnConstruccion,
    fecha_creacion: new Date(),
    unidades: []
  };

  projectStates: ProjectState[] = [];

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectStates = Object.values(ProjectState);
  }

  crearProyecto(): void {
    this.projectService.createProject(this.project).subscribe(createdProject  => {
      this.router.navigate(['/projects', createdProject.id, 'detail']);
    });
  }
}
