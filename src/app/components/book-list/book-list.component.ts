import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.getAll()
  }


  getAll() {
    return this.bookService.getAllBook().subscribe(res => {
      this.books = res
      console.log(this.books)
    })
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.bookService.destroy(id).subscribe(res => {
        console.log(res)
        this.getAll()
      })
    }
  }
}
