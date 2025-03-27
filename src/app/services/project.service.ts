import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl: string = environment.apiUrl + '/proyectos';

  constructor(private http: HttpClient) {}

  getProjects(page: number = 1, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    return this.http.get<any>(this.apiUrl, { params });
  }

  searchProjects(searchTerm: string): Observable<any> {
    const params = new HttpParams().set('search', searchTerm);
    return this.http.get<any>(this.apiUrl, { params });
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl+'/', project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}/${project.id}/`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}/`);
  }
}
