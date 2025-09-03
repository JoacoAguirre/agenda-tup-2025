import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  loggeado: boolean = false;

  loggear(){
    this.loggeado = true;
  }

  desloggear(){
    this.loggeado = false;
  }
}
