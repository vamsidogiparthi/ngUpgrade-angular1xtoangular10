import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { HeroAppNg1LazyLoaderService } from './hero-app-lazy-load.service';

@Component({
    selector: 'hero-app-angular-js',
    template: '<div ng-view></div>'
})

// used as wrapper up on angular js app to allow it to bootstrap lazily up on required by the route
export class HeroAngularAppJSComponent implements OnInit, OnDestroy {
    constructor(
        private lazyLoader: HeroAppNg1LazyLoaderService,
        private elRef: ElementRef
    ) { }

    ngOnInit() {
        this.lazyLoader.load(this.elRef.nativeElement);
    }

    ngOnDestroy() {
        this.lazyLoader.destroy();
    }
}