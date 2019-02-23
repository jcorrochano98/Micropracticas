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

  public EstadoCoche: any = EstadoCoche;  // ESTA LINEA SOLO SIRVE PARA PODER USAR EstadoCoche en el TEMPLATE.
  public coches: Array<Coche> = [new Coche('renault', 'scenic', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, '../assets/scenic.jpg', EstadoCoche.BUENO),
  new Coche('renault', 'megane', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, '../assets/megane.png', EstadoCoche.BUENO), new Coche('renault', 'clio',
    new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, '../assets/clio.jpg', EstadoCoche.BUENO), new Coche('tesla', 'model 3', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, '../assets/tesla.jpg', EstadoCoche.BUENO),
  new Coche('fiat', 'panda', new Date(2007, 10, 1), new Date(2018, 3, 1), 5000, "", EstadoCoche.MALO)];

  public getCoches(): Array<Coche> {
    return this.coches;
  }

  public filtro: string = '';

  public getFiltrados(): Array<number> {
    var filtrados: Array<number> = [];
    var indice: number = 0;
    for (var coche of this.coches) {
      if (coche.marca.lastIndexOf(this.filtro, 0) === 0) filtrados.push(indice);
      indice = indice + 1;
    }
    return filtrados;
  }

  public comp_rebajar(i) {
    this.coches[i].rebajar();
  }

  public comp_vendido(i) {
    this.coches.splice(i, 1);
  }
}
