import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  
  heroesList:string[]=["Iron man","Sasuke","pikachu","Ella"];
  heroeEliminado:string='';

  deletear():void{
    this.heroeEliminado=this.heroesList.shift()||'';
  }

}
