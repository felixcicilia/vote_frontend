import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-ruta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './editar-ruta.component.html',
})
export class EditarRutaComponent {}
