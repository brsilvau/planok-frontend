import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { FormsModule } from '@angular/forms';
import { ProjectState } from '../../models/enums';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss'],
  imports: [FormsModule, CommonModule, RouterModule]
})
export class ProjectEditComponent implements OnInit {
  project: Project | undefined;
  projectStates: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.projectStates = Object.values(ProjectState);
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.projectService.getProject(projectId).subscribe((data: Project) => {
        this.project = data;
      });
    }
  }

  actualizarProyecto(): void {
    this.projectService.updateProject(this.project!).subscribe(response => {
      this.router.navigate(['/projects']);
    });
  }
}
