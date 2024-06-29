import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css']
})
export class LazyImageComponent  implements OnInit {

  @Input() src!: string;

  @Input() alt: string = 'gif image';
  @Input() width!: string;
  @Input() height!: string ;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.src) {
      throw new Error('Attribute src is required');
    }
  }

  onLoad(): void {
    this.hasLoaded = true;
  }

}
