import { Directive, ElementRef, Injector, Input, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';



HeroDetailAngularController.$inject = [];
function HeroDetailAngularController() {
    var vm = this;
    vm.message = 'Running upgraded angular';
}

export const heroDetailAngular = {
    template: `
    <h1> {{ $ctrl.message }} </h1>
    <p> {{ $ctrl.title }} </p>
    <hero-detail-angular2></hero-detail-angular2>
  `,
    controller: HeroDetailAngularController
};

@Directive({
    selector: 'hero-detail-angular'
})

export class HeroDetailAngularDirective extends UpgradeComponent {
    @Input() title: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('heroDetailAngular', elementRef, injector);
    }
}