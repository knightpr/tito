import {Injectable} from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class TitoService {
  private _titos;

  constructor() {
    this._titos = titos;
  }
  gettitos() {
    return this._titos;
  }
  completed(tito) {
    // tito.isCompleted = tito.isCompleted ? false : true;
  }
  delete(tito) {
    var index = this._titos.indexOf(tito);
    this._titos.splice(index, 1);
  }
  add(value: string) {
    var tito = {
      time: new Date(),
      createdAt: new Date(),
      value: value
    }
    this._titos.push(tito);
  }
}
var titos = [
 
]