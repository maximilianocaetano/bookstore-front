import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  styleUrls: ['./categoria-read.component.css'],
  templateUrl: './categoria-read.component.html',
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = []

 displayedColumns:  string[]= ['id','nome','descricao','acoes'];

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll();
  }
 findAll(){
   this.service.findAll().subscribe(resposta =>{
     console.log(resposta);
    this.categorias = resposta;
   })
 }
  
}
 