import { Component, Input } from '@angular/core';
import { ManageArticlesService } from '../../services/manage-articles.service';
import { Article } from '../../models/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrl: './single-article.component.scss'
})
export class SingleArticleComponent {

  constructor(private router: Router) {

  }

  @Input() article!: Article

  goToDetails() {
    this.router.navigate(['/articledetails'], {queryParams: {id: this.article.id}});
  }

}
