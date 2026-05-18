import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-crear-muelle',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './crear-muelle.component.html',
})
export class CrearMuelleComponent {}
