import { Directive, ElementRef, Injector, Input, SimpleChanges } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';



HeroDetailAngularController.$inject = [];
function HeroDetailAngularController() {
  var vm = this;

  vm.text = 'My angularjs component';
}
export const heroDetailAngular = {
    template: `
    <h1> {{ $ctrl.text }} </h1>
    <p> {{ $ctrl.title }} </p>
  `,
  controller: HeroDetailAngularController,
  bindings: {
    title: '<?'
  },
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