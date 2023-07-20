import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropedown]'
})

export class DropedownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}