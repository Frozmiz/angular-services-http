import { Component } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  listado!: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getDigimons().subscribe((data:any) => {
      this.listado = [...data.content]
    })
  }

}
