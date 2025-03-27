import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  totalPages: number = 1;
  pageSize: number = 10;

  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  buscar(): void {
    this.projectService.getProjects(this.currentPage, this.searchTerm).subscribe(data => {
      this.projects = data.results;
      this.totalPages = Math.ceil(data.count / this.pageSize);
      console.log(this.totalPages)
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.buscar();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.buscar();
    }
  }

  eliminarProyecto(id: string): void {
    if (confirm('¿Estás seguro de eliminar este proyecto?')) {
      this.projectService.deleteProject(id).subscribe(() => {
        this.buscar();
      });
    }
  }
  
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
