import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  
  public listadoEntradas: Entrada[];


  
  constructor(){
    this.listadoEntradas = [
      {
        titulo: 'Introducción a Angular',
        resumen: 'En esta lección realizaremos una pequeña introducción'
      },
      {
        titulo: 'Typescript como lenguaje para Angular',
        resumen: 'Breve recorrido por el languaje de Typescript'
      },
      {
        titulo: 'Componentes en Angular',
        resumen: 'Aprendemos a usar los componentes en Angular'
      },
    ]


  } 
  
  ngOnInit(): void {
    
  }

  public mostrarTitulo(titulo: string):void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
