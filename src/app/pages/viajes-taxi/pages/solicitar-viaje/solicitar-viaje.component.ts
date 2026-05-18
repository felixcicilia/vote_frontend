import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solicitar-viaje',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './solicitar-viaje.component.html',
})
export class SolicitarViajeComponent {}
