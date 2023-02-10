import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})

export class CharacterDetailComponent implements OnInit {

  constructor( private api: ApiService, private ActivatedRoute: ActivatedRoute) {}

  id? : string | null;

  digimon: any;

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
    })

    // Trae los datos del digimon en particular

    this.api.getDigimon(this.id).subscribe((data) => {
      console.log(data)
      this.digimon = data;
    })

  }

}
