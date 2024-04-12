import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';
import { take } from 'rxjs';
import { ManageArticlesService } from '../../services/manage-articles.service';

@Component({
  selector: 'app-single-article-detail',
  templateUrl: './single-article-detail.component.html',
  styleUrl: './single-article-detail.component.scss'
})
export class SingleArticleDetailComponent implements OnInit{

  article: Article | undefined;
  
  constructor(private route: ActivatedRoute,
    private manageArticles: ManageArticlesService
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe(data => {
      this.manageArticles.getOneArticle(data['id']).subscribe(article => {
        this.article = article;
      })
    })
  }
}
