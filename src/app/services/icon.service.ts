import { Injectable } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  faCoffee =  faCoffee ;
  constructor() { }
}
