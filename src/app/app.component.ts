import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'componentes-elementos';

  pruebaNumber:number=0
  PruebaDiv:boolean=false

  constructor() {

  
    }
  
    ngOnInit(): void {
    }
  
    funCambio(e:any){
      this.pruebaNumber = e;
      console.log("dato que viene de componente contenido:", this.pruebaNumber)
      
      if(this.pruebaNumber==1){
        this.PruebaDiv = true;
      }
    }
   
     
   
  
}
