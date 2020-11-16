import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { heroListComponentAngular } from './hero-list-angularjs.component';


@Directive({
    selector: 'hero-list'
})

export class HeroListAngularDirective extends UpgradeComponent {
    @Input() title: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('heroList', elementRef, injector);
    }
}