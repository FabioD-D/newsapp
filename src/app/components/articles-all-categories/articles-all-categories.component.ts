import { Component, OnInit } from '@angular/core';
import { ManageArticlesService } from '../../services/manage-articles.service';
import { Article } from '../../models/article';
import { take } from 'rxjs';

@Component({
  selector: 'app-articles-all-categories',
  templateUrl: './articles-all-categories.component.html',
  styleUrl: './articles-all-categories.component.scss'
})
export class ArticlesAllCategoriesComponent implements OnInit {

  articles: Array<Article> = new Array<Article>;

  constructor(private manageArticles: ManageArticlesService) {}

  ngOnInit(): void {
    console.log("Ci arriva");
    this.manageArticles.getArticles().subscribe(articles => {
        this.pickThreeNewest(articles);
    })
  }

  pickThreeNewest(articles: Array<Article> | null) {
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



