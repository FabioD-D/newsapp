import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { ArticlesAllCategoriesComponent } from './components/articles-all-categories/articles-all-categories.component';
import { ArticlesOneCategoryComponent } from './components/articles-one-category/articles-one-category.component';
import { SingleArticleDetailComponent } from './components/single-article-detail/single-article-detail.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'articlesallcategories', component: ArticlesAllCategoriesComponent},
  { path: 'articledetails', component: SingleArticleDetailComponent},
  { path: 'articlesonecategory', component: ArticlesOneCategoryComponent},
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
  { path: '**', component: ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
