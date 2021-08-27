import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  formCreate: FormGroup | undefined

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formCreate = this.fb.group({
      title: [''],
      author: [''],
      description: ['']
    })
  }

  submit() {
    let data = this.formCreate?.value
    this.bookService.create(data).subscribe(res => {
      this.router.navigate([''])
    })
  }

}
