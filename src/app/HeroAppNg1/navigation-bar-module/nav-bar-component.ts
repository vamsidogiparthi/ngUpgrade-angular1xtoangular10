import { Directive, Input, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

// Basic controller set up for an angular js component
NavBarAngularController.$inject = [];
function NavBarAngularController() {
    var vm = this;
}

export const navBarAngular = {
    template: `
     `,
    controller: NavBarAngularController
};

// Preparing a angular directive to upgrade an angular js component
@Directive({
    selector: 'nav-bar'
})

// this class extends upgrade component interface to upgrade an angularjs component to be use inside angular 
export class NavBarDirective extends UpgradeComponent {
    @Input() title: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('nav', elementRef, injector);
    }
}