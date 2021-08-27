import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormBuilder} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: any;

  constructor(
    private bookService: BookService,
    private fb: FormBuilder,
    private activated: ActivatedRoute) {
  }

  // @ts-ignore
  id = +this.activated.snapshot.paramMap.get('id')

  ngOnInit(): void {
    this.bookService.getBookById(this.id).subscribe(res => {
      this.book = res;
    })
  }
}
