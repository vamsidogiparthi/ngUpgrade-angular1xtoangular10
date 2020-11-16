import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
    selector: 'hero-list-angularjs'
})

// Wrapper to upgrade angular js component to angular directive using upgrade component
export class HeroListAngularDirective extends UpgradeComponent {
    @Input() widgetTitle: string;

    constructor(elementRef: ElementRef, injector: Injector) {
        super('heroList', elementRef, injector);
    }
}