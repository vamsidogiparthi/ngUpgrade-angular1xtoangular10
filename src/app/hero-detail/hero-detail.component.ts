import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})

// simple angular 2 component with an input parameter.
export class HeroDetailComponent implements OnInit {

  @Input() hero: string;
  constructor() { }

  ngOnInit(): void {
  }

}
