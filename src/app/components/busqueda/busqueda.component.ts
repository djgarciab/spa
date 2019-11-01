import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  busquedaHeroes:Heroe[]=[];
  termino:string;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService
              ) {
                
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params=>{
      this.termino = params['termino'];
      this.busquedaHeroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.busquedaHeroes);
    })  

  }

}
