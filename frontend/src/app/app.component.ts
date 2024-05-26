import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'frontend-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `<nav class="navbar navbar-expand bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" routerLink="/">analogjs</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" routerLink="/"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/blog/create">New Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet> `,
})
export class AppComponent {}
