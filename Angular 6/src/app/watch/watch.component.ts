import { Watch } from './../shared/watch';
import { Component, OnInit } from '@angular/core';
import { WatchService } from '../services/watch.service';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  watches: Watch[];
  constructor(private watchService: WatchService) { }

  ngOnInit() {
     this.watchService.getWatches()
     .subscribe((watches)=>this.watches=watches);
  }

}
