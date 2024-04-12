import { Component } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { articleCategories } from '../../models/articleCategories';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-choose-category',
  templateUrl: './dialog-choose-category.component.html',
  styleUrl: './dialog-choose-category.component.scss'
})
export class DialogChooseCategoryComponent {

  categories = articleCategories;
  selectedCategory!: string;
  
  constructor(public dialogRef: MatDialogRef<DialogChooseCategoryComponent>,
    private router: Router
  ) {
  }

  viewChosenCategories() {
    if(this.selectedCategory) {
      console.log("PARAMS", this.selectedCategory);
      this.router.navigate(['/articlesonecategory/'], {queryParams: {category: this.selectedCategory}});
    }
  }

}
