import {Injectable} from 'angular2/core';
import {Tito} from '../models/tito';
import {User} from '../models/user';
import { Http } from 'angular2/http';


@Injectable()
export class UserService{


	getUser(){
		this.tito1 = new Tito(1,'in','9:00 am');
		this.tito2 = new Tito(2,'out','11:40 am');
		this.tito3 = new Tito(3,'in','13:00 pm');
		this.tito4 = new Tito(4,'out','16:00 pm');

      
		return  new User('Prem1 Gupta1','prem.gupta@kcc.edu.np','ABC SRL', [this.tito1,this.tito2,this.tito3,this.tito4]);

	}

	addTime(){


	}
}