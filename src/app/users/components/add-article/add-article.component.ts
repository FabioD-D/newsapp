import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { articleCategories } from '../../../models/articleCategories';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.scss'
})
export class AddArticleComponent implements OnInit{

  categories = articleCategories;
  addArticleForm!: FormGroup;
  title!: FormControl;
  text!: FormControl;
  selectedCategory!: string;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    this.title = new FormControl(null, [Validators.required]);
    this.text = new FormControl(null, [Validators.required]);

    this.addArticleForm = this.fb.group({
      title: this.title,
      text: this.text
    });
  }

  addArticle(): void {
    console.log(this.addArticleForm.value);
  }



}
