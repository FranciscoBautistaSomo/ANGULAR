import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/interfaces';
import { EntradaService } from '../../shared/services/entrada.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  
  public listadoEntradas: any;
  
  constructor(private entradaService: EntradaService){
    /**this.listadoEntradas = [
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
    ]*/
  } 
  
  ngOnInit(): void {
    this.recuperarEntradas();
  }

  private recuperarEntradas(): void{
    this.entradaService.recuperarEntradas().subscribe(
      (data) =>{
          this.listadoEntradas = data;
      },
      (error) =>{

      },
      () => {

      }
    )
    
  }

  public mostrarTitulo(titulo: string):void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }

}
