import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() item: any = {}; //item se refiere a heroe por el *ngFor="let item of heroes;"
  @Input() index: number;

  @Output() heroeSeleccionado: EventEmitter<number>

  constructor( private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verHeroe(){
    //console.log(this.index);
    this.router.navigate( ['/heroe',this.index] );
    //this.heroeSeleccionado.emit( this.index );
  }

}
