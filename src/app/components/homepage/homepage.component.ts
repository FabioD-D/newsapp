import { Component } from '@angular/core';
import { ManageArticlesService } from '../../services/manage-articles.service';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogChooseCategoryComponent } from '../dialog-choose-category/dialog-choose-category.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  constructor(private manageArticles: ManageArticlesService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  goToAllCategories(): void {
    this.router.navigate(['/articlesallcategories']);
  }

  goToArticleByCategory(): void {
    this.dialog.open(DialogChooseCategoryComponent, {
      width: '400px'
    });
  }

}
