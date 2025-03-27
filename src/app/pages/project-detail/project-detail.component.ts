import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectState } from '../../models/enums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProjectDetailComponent implements OnInit {
  project: Project = {
    id: "",
    nombre: "",
    descripcion: "",
    ubicacion: "",
    fecha_inicio:  new Date() ,
    fecha_fin:  new Date() ,
    estado: ProjectState.EnConstruccion,
    fecha_creacion:  new Date(),
    unidades: []
  };

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProject(projectId).subscribe(data => {
        this.project = data;
      });
    }
  }
}