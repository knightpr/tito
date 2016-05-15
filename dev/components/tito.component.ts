import {Component} from 'angular2/core';
import {TitoItem} from '../components/titoItem.component';
import {TitoService} from '../services/tito.service';


@Component({
	selector:'tito-list',
	template:`
		  <a (click)="titoService.add('in')">[IN]</a>
		 
		  <a (click)="titoService.add('out')">[OUT]</a>
		  <ul>
      		<tito-item *ngFor="#tito of titos" [tito]="tito"></tito-item>
    	  </ul>
	`,
	directives: [TitoItem],
	providers: [TitoService]


})
export class TitoComponent{
	public titos: Array<any>;

	constructor(private titoService: TitoService){
		this.titos = titoService.gettitos();
	}

}


