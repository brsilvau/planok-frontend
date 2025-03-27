import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ProjectState, UnitState, UnitType } from '../../models/enums';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertyUnit } from '../../models/property.model';

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
  newUnit: PropertyUnit = {
    id: '',
    numero_unidad: '',
    tipo_unidad: UnitType.Departamento,
    metraje_cuadrado: 0,
    precio_venta: 0,
    estado: UnitState.Disponible,
    fecha_creacion: new Date(),
    proyecto: ''
  };

  unitTypes: string[] = [];
  unitStates: string[] = [];

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
    this.unitTypes = Object.values(UnitType);
    this.unitStates = Object.values(UnitState);
  }
  addUnit(): void {
    if (!this.project || !this.project.id) {
      return;
    }
    this.newUnit.proyecto = this.project.id
    this.projectService.addUnit(this.newUnit).subscribe(
      (unit: PropertyUnit) => {
        if (!this.project.unidades) {
          this.project.unidades = [];
        }
        this.project.unidades.push(unit);
        this.newUnit = {
          id: '',
          numero_unidad: '',
          tipo_unidad: UnitType.Departamento,
          metraje_cuadrado: 0,
          precio_venta: 0,
          estado: UnitState.Disponible,
          fecha_creacion: new Date(),
          proyecto: ''
        };
      },
      (error: any) => {
        console.error('Error al agregar la unidad', error);
      }
    );
  }
}