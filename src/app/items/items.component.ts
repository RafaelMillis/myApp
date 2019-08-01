import { Component, OnInit } from '@angular/core';
import { DataService } from '../_services/data/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  data;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getData();
  }

}
