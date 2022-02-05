import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  @HostBinding("style.color") couleur: string;

  @HostListener("window:keydown", ["$event"]) windowClick($event) {
    console.log($event.keyCode);
    this.couleur = "red";
    switch ($event.keyCode) {
      case 37:
        this.couleur = "red";
        break;
      case 38:
        this.couleur = "blue";
        break;
      case 39:
        this.couleur = "green";
        break;
      case 40:
        this.couleur = "yellow";
        break;
      default:
        this.couleur = "black";
        break;
    }
  }

  constructor() {}
}
