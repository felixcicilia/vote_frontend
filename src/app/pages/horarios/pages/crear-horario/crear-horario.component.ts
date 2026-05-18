import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-horario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-horario.component.html',
})
export class CrearHorarioComponent {}
