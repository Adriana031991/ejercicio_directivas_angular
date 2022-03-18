import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {
  @Input() set appCustomIf(condicion: boolean) {
    if (condicion){
      this.viewContainer.createEmbeddedView(this.tl);
    } else {
      this.viewContainer.clear();
    }
  }



  constructor( private tl: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef) {

  }

}
