import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Food } from 'src/app/basics/models/food';
import { Tag } from 'src/app/basics/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  _url = "/assets/mocks/food.json"
 
  constructor(private http: HttpClient) { }

  getFoodById(id: number, foods: Food[]): Food{
    return foods.find(food => food.id == id)!;
  }

getAllFoodsBySearchTerm(searchTerm:string, foods: Food[]):Food[]{
  return foods.filter(food=>
        {return food.name.toLowerCase().includes(searchTerm.toLowerCase())});
}
 

  getAllTags():Tag[]{
    return [
      {name: 'All', count:14},
      {name: 'FastFood', count:4},
      {name: 'Pizza', count:2},
      {name: 'Lunch', count:3},
      {name: 'SlowFood', count:2},
      {name: 'Hamburger', count:1},
      {name: 'Fry', count:1},
      {name: 'Soup', count:1}
    ]
  }

  getAllFoodsBtTag(tag: string, allData:Food[]):Food[]{
    return tag == "All" ? allData : allData.filter(food => {
        return food.tags?.includes(tag)})
  }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(this._url);
  }
}
