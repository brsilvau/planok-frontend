import { UnitState, UnitType } from "./enums";

export interface PropertyUnit {
    id: string;
    numero_unidad: string;
    tipo_unidad: UnitType;
    metraje_cuadrado: number;
    precio_venta: number;
    estado: UnitState;
    fecha_creacion: Date;
    clienteId?: string;
    proyecto: string;
}