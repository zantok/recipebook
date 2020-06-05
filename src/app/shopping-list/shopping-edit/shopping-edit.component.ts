import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: false}) ingredient: ElementRef;
  @ViewChild('amountInput',{static: false}) amount: ElementRef;
  


  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient(){
    this.shoppingListService.addIngredient(new Ingredient(this.ingredient.nativeElement.value,this.amount.nativeElement.value));
  }

}
