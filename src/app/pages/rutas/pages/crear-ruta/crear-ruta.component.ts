import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-ruta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-ruta.component.html',
})
export class CrearRutaComponent {}
