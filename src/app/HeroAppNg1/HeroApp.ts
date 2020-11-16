import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
import 'angular-route';
import { AppComponent } from '../app.component';
import { HeroListModule } from './hero-list-module/hero-list.module';
import { NavBarModule } from './navigation-bar-module/nav-bar.module';

// module developed in angula js
export const HeroApp = angular
  .module('HeroApp', ['ngRoute', HeroListModule.name, NavBarModule.name])
  .directive('appRoot', downgradeComponent({ component: AppComponent }))
  .config(['$routeProvider', '$locationProvider',
    function config($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/app1', {
          template: `
        <p>
          Users Page
        </p>
      `
        }).
        otherwise({
          template: ''
        });
    }]);
    
// this function will be used to lazy load the angularJS app when required.
  export function bootstrap(el: HTMLElement) {
    return angular.bootstrap(el,  [HeroApp.name]);
  }