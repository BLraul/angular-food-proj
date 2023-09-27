import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../basics/models/tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

@Input() foodPageTags?: string[]

@Input() justifyContent:string = 'center';

tags?: Tag[];

  constructor(private foodService: FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
   }

  ngOnInit(): void {
  }

}
