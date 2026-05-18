import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-alquiler',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-alquiler.component.html',
})
export class CrearAlquilerComponent {}
