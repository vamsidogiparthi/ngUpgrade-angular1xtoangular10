import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import 'angular-route';
import { AppComponent } from 'src/app/app.component';
import { HeroListModule } from './hero-list-module/hero-list.module';

// module developed in angular js
export const HeroApp = angular
  .module('HeroApp', ['ngRoute', HeroListModule.name])
  .directive('appRoot', downgradeComponent({ component: AppComponent }));
    