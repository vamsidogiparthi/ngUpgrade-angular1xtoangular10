import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import 'angular-route';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { heroListComponentAngular } from './hero-list-angularjs.component';

export const HeroListModule = angular.module('HeroListModule', ['ngRoute']);

//example angular js module
HeroListModule.component('heroList', heroListComponentAngular)
  .directive(
    'heroDetailAngular2',
    downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory
  )