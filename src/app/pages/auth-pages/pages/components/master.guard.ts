import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserRole } from '../../models/auth.model';

export const masterGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.hasRole(UserRole.MASTER)) return true;

  router.navigate(['/tasas']);
  return false;
};
