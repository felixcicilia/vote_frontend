import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-horario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './editar-horario.component.html',
})
export class EditarHorarioComponent {}
