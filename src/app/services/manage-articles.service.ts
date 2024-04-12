import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageArticlesService {

  apiUrl = "http://localhost:3000";
//  articles!: Array<Article>;
  articles$: BehaviorSubject<Array<Article> | null> = new BehaviorSubject<Array<Article> | null>(null);

  constructor(private http: HttpClient) {
  //  console.log("Costruito servizio manage-articles")
    this.retrieveArticles()
    
  }

  private retrieveArticles() {
  //  console.log("Sono dentro getArticles");
    this.http.get<Array<Article>>(`${this.apiUrl}/article`).pipe(
      map((res) => {
   //     console.log("ARTICLES", res)
        this.articles$.next(res);
   //     this.articles = res;
   //     this.articles$.subscribe( article => console.log("ARTICLES", article));
   //     console.log("THIS ARTICLES", this.articles);
      })
    ).subscribe();
  }

  getArticles(): Observable<Array<Article> | null> {
    return this.articles$.pipe(map(articles => articles));
  }

  getOneArticle(id: string): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/article/${id}`).pipe(
      map(res => {
        console.log("RES", res)
        return res;
      })
    )
  }

  getArticlesByCategory(category: string): Observable<Array<Article> | undefined> {
    return this.articles$.pipe(map(articles => articles?.filter(article => article.category === category)));
  }


}
