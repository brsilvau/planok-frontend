// src/app/pages/project-create/project-create.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectState } from '../../models/enums';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss'],
  imports: [FormsModule]
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

  projectStates = ['a','b'];


  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectStates = Object.values(ProjectState);
  }

  crearProyecto(): void {
    this.projectService.createProject(this.project).subscribe(response => {
      this.router.navigate(['/projects']);
    });
  }
}
