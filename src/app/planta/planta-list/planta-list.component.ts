import { Component, OnInit  } from '@angular/core';
import { Planta } from '../planta';
import { PlantaService } from '../planta.service';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent {

  plantas: Array<Planta> = [];
  counterInterior: number = 0;
  counterExterior: number = 0;

  constructor(private plantaService: PlantaService) { }

  getPlantas(): void {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;

      for (let prop of this.plantas) {
        if (prop.tipo == 'Interior') {
          this.counterInterior++;
        }
        if (prop.tipo == 'Exterior') {
          this.counterExterior++;
        }
      }
    });
  }

  ngOnInit() {
    this.getPlantas();
  }
}
