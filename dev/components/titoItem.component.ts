import {Component} from 'angular2/core';
import {TitoService} from '../services/tito.service';

@Component({
	selector:'tito-item',
	properties:['tito'],
	template:`
			<li class="tito-item">
			  {{tito.value}} - 	{{tito.time}} 
			  <a >Edit</a>
			  <a (click)="titoService.delete(tito)">Delete</a>
			</li>
	`


})
export class TitoItem{
	constructor(private titoService: TitoService){
	}

}