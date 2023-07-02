import { Component } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.css']
})
export class TramitesComponent {
  displayedColumns: string[] = ['nombre', 'codigo', 'documentos', 'fechaAuditoria', 'activo', 'acciones']; // Agrega más columnas según tus necesidades

  dataSource = [
    { nombre: 'Tramite 1', codigo: '001', documentos: 'acta', fechaAuditoria: 'hoy', activo: 'Si' },
    { nombre: 'Tramite 2', codigo: '002', documentos: 'acta', fechaAuditoria: 'hoy', activo: 'Si' },
    // Agrega más datos según tus necesidades
  ];
}
