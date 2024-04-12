import { Component, OnInit } from '@angular/core';
import { ManageArticlesService } from '../../services/manage-articles.service';
import { Article } from '../../models/article';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-mainview-article',
  templateUrl: './mainview-article.component.html',
  styleUrl: './mainview-article.component.scss'
})
export class MainviewArticleComponent implements OnInit{

  articles!: Array<Article> | null;
  

  constructor(private manageArticles: ManageArticlesService) {}

  ngOnInit() {
    this.manageArticles.getArticles().subscribe(articles => {
      this.articles = articles;
      console.log("ARTICLES IN MAINVIEW", this.articles)
    });
    
  }
}
