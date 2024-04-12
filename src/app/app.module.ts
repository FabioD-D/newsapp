import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { MainviewArticleComponent } from './components/mainview-article/mainview-article.component';
import { ArticlesAllCategoriesComponent } from './components/articles-all-categories/articles-all-categories.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { DialogChooseCategoryComponent } from './components/dialog-choose-category/dialog-choose-category.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ArticlesOneCategoryComponent } from './components/articles-one-category/articles-one-category.component';
import { SingleArticleDetailComponent } from './components/single-article-detail/single-article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomepageComponent,
    ErrorpageComponent,
    SingleArticleComponent,
    MainviewArticleComponent,
    ArticlesAllCategoriesComponent,
    DialogChooseCategoryComponent,
    ArticlesOneCategoryComponent,
    SingleArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
