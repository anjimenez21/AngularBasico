import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>Hola mundo</h1>
    <h2>{{title}}</h2>
    <button (click)= "acumular(base)">+5</button>
    <span>{{numero}}</span>
    <button (click)= "acumular(-base)">-5</button> `
})


export class ContadorComponent{
    title = 'Contador app';
    numero: number = 10;
    base: number =5;
  
    acumular(valor: number){
        this.numero += valor;
      }
    
}