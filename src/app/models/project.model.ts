import { ProjectState } from "./enums";
import { PropertyUnit } from "./property.model";

export interface Project {
    id: string;
    nombre: string;
    descripcion: string;
    ubicacion: string;
    fecha_inicio: Date;
    fecha_fin: Date;
    estado: ProjectState;
    fecha_creacion: Date;
    unidades?: PropertyUnit[];
}