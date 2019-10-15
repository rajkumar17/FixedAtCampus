import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }
  
  	public username: string;
  	public url: string;
  	public password: string; 
}
