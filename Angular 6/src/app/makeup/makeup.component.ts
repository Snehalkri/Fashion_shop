import { MakeupService } from './../services/makeup.service';
import { Makeup } from './../shared/makeup';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeup',
  templateUrl: './makeup.component.html',
  styleUrls: ['./makeup.component.css']
})
export class MakeupComponent implements OnInit {
 makeups: Makeup[];
  constructor(private makeupService: MakeupService) { }

  ngOnInit() {
     this.makeupService.getMakeups()
    .then((makeups)=>this.makeups=makeups);
  }
}
