import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import 'angular-route';
import { HeroDetailComponent } from 'src/app/hero-detail/hero-detail.component';
import { heroListComponentAngular } from './hero-list-angularjs.component';

export const HeroListModule = angular.module('HeroListModule', ['ngRoute']);

HeroListModule.component('heroList', heroListComponentAngular)
  .directive(
    'heroDetailAngular2',
    downgradeComponent({ component: HeroDetailComponent }) as angular.IDirectiveFactory
  )
HeroListModule.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/app1/heros', { template: '<hero-list title="List of DC Heros"></hero-list>' });
}]);