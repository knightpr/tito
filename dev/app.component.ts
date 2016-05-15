import {Component} from 'angular2/core';
import {UserComponent} from './components/user.component';
import {TitoComponent} from './components/tito.component';

// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

@Component({
    selector: 'tito-app',
    template: `
        <h1>TiTo</h1>
        <p>Time in and Time out</p>
        <user-section></user-section>
        <tito-list></tito-list>

    `,
  //  directives:[UserComponent,TitoComponent]
    directives:[TitoComponent]
})
export class AppComponent {
	constructor(){}
}