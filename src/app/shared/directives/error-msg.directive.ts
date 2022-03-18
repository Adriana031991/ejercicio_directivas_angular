import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appErrorMsg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  /* la idea de esta directiva es poder cambiar el span del html de agregar,
  cambiandole el color con la regla de que: si la persona quiere elegir el color, lo seleccione
  y si no, que sea rojo por defecto.

  tambien cambiar el mensaje del span del html

  la idea tambien es estar al pendiente de los cambios del html, y hacer cambios al estilo
  mediante un set en el input (el que viene del padre)

  en caso de que no se enlace en el html un color o un texto, se deberia mostrar los que estan por defecto

  el input valido permite aparecer o no el span . como si fuera el ng-if pero con directiva.
  segun sea true o false le añade una clase que se llama hidden y en el styles general, se le coloca display none para que aparezca o no segun el boolean
  */

  private _color: string = 'red';
  private _mensaje:string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string ) {
    // this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
    this.setColor();
  };
  // @Input() mensaje: string = 'Este campo es requerido';
  @Input() set mensaje (valor: string) {
    // this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido (valor:boolean) {
    if (valor){
      this.htmlElement.nativeElement.classList.add('hidden')
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden')

    }
  }

  constructor( private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setEstilo();
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor() {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje() {
    this.htmlElement.nativeElement.innerText = this._mensaje;

  }

}
