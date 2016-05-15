import {Component, OnInit} from 'angular2/core';
import {Tito} from '../models/tito';
import {User} from '../models/user';
import {UserService} from '../services/user.service';


@Component({
	selector:'user-section',
	template:`
			<h1>welcome Mr. {{user.name}} @ {{user.company}}</h1>
			<h2>Timesheet for june</h2>
		
			<ul>
				<li *ngFor="#tito of user.titos">
					{{tito.id}} - {{tito.status}} @ {{tito.at}}
				</li>

			
			</ul>
	`,
  providers: [UserService]


})

export class UserComponent{


	// //console.log("here");
	// //console.log(UserService.getUser());
	//users: Tito[];

  constructor(private userService: UserService) { }
  getUsers() {
   this.user= this.userService.getUser();
  }
  ngOnInit() {
    this.getUsers();
  }
	//user = new User();
	// user = new User('Prem Gupta1','prem.gupta@kcc.edu.np','ABC SRL', [this.tito1,this.tito2,this.tito3,this.tito4]);

	// 

}