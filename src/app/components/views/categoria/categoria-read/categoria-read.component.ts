import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  styleUrls: ['./categoria-read.component.css'],
  templateUrl: './categoria-read.component.html',
})
export class CategoriaReadComponent implements OnInit {

  categorias: Categoria[] = []

 displayedColumns:  string[]= ['id','nome','descricao','livros','acoes'];

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }
 findAll(){
   this.service.findAll().subscribe(resposta =>{
     console.log(resposta);
    this.categorias = resposta;
   })
 }
 navegarParaCategoriaCreate(){
  this.router.navigate(["categorias/create"])
 }
}
 