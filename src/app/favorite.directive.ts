import { Directive, HostBinding, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[mwFavorite]"
})
export class FavoriteDirective {
  @HostBinding("class.tc-green-700") isFavorite: boolean;
  @HostBinding("class.hoverd") hovering: boolean;
  @Input()
  set mwFavorite(value) {
    this.isFavorite = value;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    this.hovering = true;
  }

  @HostListener("mouseleave")
  onmouseleave() {
    this.hovering = false;
  }
  constructor() {}
}
