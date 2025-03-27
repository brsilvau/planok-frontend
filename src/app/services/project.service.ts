import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { environment } from '../../environments/environment';
import { PropertyUnit } from '../models/property.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiProyectosUrl: string = environment.apiUrl + '/proyectos';
  private apiUnidadesUrl: string = environment.apiUrl + '/unidades'

  constructor(private http: HttpClient) {}

  getProjects(page: number = 1, searchTerm?: string): Observable<any> {
    let params = new HttpParams().set('page', page.toString());
    if (searchTerm) {
      params = params.set('search', searchTerm);
    }
    return this.http.get<any>(this.apiProyectosUrl, { params });
  }

  searchProjects(searchTerm: string): Observable<any> {
    const params = new HttpParams().set('search', searchTerm);
    return this.http.get<any>(this.apiProyectosUrl, { params });
  }

  getProject(id: string): Observable<Project> {
    return this.http.get<Project>(`${this.apiProyectosUrl}/${id}`);
  }

  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiProyectosUrl+'/', project);
  }

  updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiProyectosUrl}/${project.id}/`, project);
  }

  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.apiProyectosUrl}/${id}/`);
  }

  addUnit(unit: PropertyUnit): Observable<PropertyUnit> {
    return this.http.post<PropertyUnit>(`${this.apiUnidadesUrl}/`, unit);
  }
}
