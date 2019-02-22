import { Component } from '@angular/core';
import { Coche } from './coche';
import { EstadoCoche } from './coche';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MicroP2';

  public EstadoCoche:any = EstadoCoche;  // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.
  public coches:Array<Coche>=[new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'https://www.farosypilotos.es/wp-content/uploads/2017/04/grand_scenic-REAR.jpg',EstadoCoche.BUENO),
  new Coche('renault','scenic',new Date(2007,10,1),new Date(2018,3,1),5000,'https://www.farosypilotos.es/wp-content/uploads/2017/04/grand_scenic-REAR.jpg',EstadoCoche.BUENO),new Coche('renault','scenic',
  new Date(2007,10,1),new Date(2018,3,1),5000,'https://www.farosypilotos.es/wp-content/uploads/2017/04/grand_scenic-REAR.jpg',EstadoCoche.BUENO), new Coche('tesla','model 3',new Date(2007,10,1),new Date(2018,3,1),5000,'https://amp.businessinsider.com/images/5c6d714a262898671d5920d2-750-563.jpg',EstadoCoche.BUENO),
  new Coche('fiat','panda',new Date(2007,10,1),new Date(2018,3,1),5000,'https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/Fiat-Panda_2013_C01.jpg?itok=LxJTvYeN',EstadoCoche.MALO)];

  public getCoches():Array<Coche> {
    return this.coches;
  }

  public filtro:string='';

  public getFiltrados():Array<Coche> {
    var counter:number = 0;
    var lista:Array<Coche>=[];
    if(this.filtro != '') {
      for(let i of this.coches) {
        if(i.marca.lastIndexOf(this.filtro, 0) === 0) {
          lista.push(this.coches[counter]);
        }
        counter++;
      }
    } else {
      lista = this.coches;
    }
    return lista;
  }

  public comp_rebajar(i) {
    this.coches[i].rebajar();
  }

  public comp_vendido(i) {
    this.coches.splice(i,1);
  }
}
