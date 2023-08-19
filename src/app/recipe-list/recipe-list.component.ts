import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { CONST } from '../constants';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(`${CONST.BACKEND_ENDPOINT}/recipes`).subscribe(data => {
      this.recipes = data;
    });
  }

}
