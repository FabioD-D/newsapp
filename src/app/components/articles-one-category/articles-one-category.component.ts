import { Component, OnInit } from '@angular/core';
import { ManageArticlesService } from '../../services/manage-articles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articles-one-category',
  templateUrl: './articles-one-category.component.html',
  styleUrl: './articles-one-category.component.scss'
})
export class ArticlesOneCategoryComponent implements OnInit{

  chosenCategory!: string;
  articles: Array<Article> = new Array<Article>;

  constructor(private manageArticles: ManageArticlesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.pipe(take(1)).subscribe((data) => {
      console.log(data['category']);
      this.chosenCategory = data['category'];
      this.manageArticles.getArticlesByCategory(this.chosenCategory).subscribe(articles => {
        console.log(articles);
        this.pickThreeNewest(articles)
      } );
      
    })
  }

  pickThreeNewest(articles: Array<Article> | undefined) {
    
    if(articles) {
      let dates: Array<Date> = new Array<Date>;
      for (let article of articles) {
        dates.push(article.creationDate);
      }
      dates.sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);
        return dateB.getTime() - dateA.getTime()
    });
      console.log(dates);

      // Prendo solo le tre prima notizie in ordine di data
      const LIMIT = articles.length > 3 ? 3 : articles.length; 
      for (let i: number = 0; i < LIMIT; i++) {
        for (let article of articles) {
          if (article.creationDate === dates.at(i)) {
            console.log(dates.at(i), article);
            this.articles?.push(article);
            continue;
          }
        }
      }

     
    }
  }

}
