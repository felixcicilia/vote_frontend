import { Component, OnInit, computed, inject, signal } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { take } from "rxjs";

import { AuthService } from "../app/pages/auth-pages/services/auth.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly title = "Angular Ecommerce Dashboard | TailAdmin";
  readonly appReady = signal(false);
  readonly isAuthenticated = computed(() => this.authService.isAuthenticated());

  ngOnInit(): void {
    this.initAuth();
  }

  private initAuth(): void {
    this.appReady.set(false);

    this.authService
      .restoreSession()
      .pipe(take(1))
      .subscribe({
        next: (user) => {
          this.appReady.set(true);

          const currentUrl = this.router.url;

          if (user && (currentUrl === "/login" || currentUrl === "/")) {
            this.router.navigate(["/dashboard"]);
            return;
          }

          if (!user && currentUrl.startsWith("/dashboard")) {
            this.router.navigate(["/login"]);
          }
        },
        error: (error: unknown) => {
          console.error("Error restaurando sesión:", error);
          this.appReady.set(true);

          if (this.router.url.startsWith("/dashboard")) {
            this.router.navigate(["/login"]);
          }
        },
      });
  }
}
