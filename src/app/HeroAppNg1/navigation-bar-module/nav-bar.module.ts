import * as angular from 'angular';
import 'angular-route';
import { navBarAngular } from './nav-bar-component';

//Simple example to establish modularity for the angular application.  

export const NavBarModule = angular.module('NavBarModule', ['ngRoute']);

NavBarModule.component('nav', navBarAngular);