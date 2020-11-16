import { Injectable } from '@angular/core';
import * as angular from 'angular';

@Injectable({
  providedIn: 'root'
})

// Establishes a service to lazy load angular js application and destroy it when not needed.
export class HeroAppNg1LazyLoaderService {
  private app: angular.auto.IInjectorService;

  load(el: HTMLElement): void {
    import('./HeroApp').then(app => {
      try {
        this.app = app.bootstrap(el);
        console.log('bootstraped', app)
      } catch (e) {
        console.error(e);
      }
    });
  }

  destroy() {
    if (this.app) {
      this.app.get('$rootScope').$destroy();
    }
  }
}