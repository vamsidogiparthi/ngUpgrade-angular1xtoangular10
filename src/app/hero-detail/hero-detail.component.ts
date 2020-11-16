import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: string;
  constructor() { }
  ngOnInit(): void {
  }

}
