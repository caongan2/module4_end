import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent implements OnInit {

  formUpdate: FormGroup | undefined

  constructor(private booKService: BookService,
              private fb: FormBuilder,
              private router: Router,
              private activated: ActivatedRoute) { }

  // @ts-ignore
  id = +this.activated.snapshot.paramMap.get('id')
  ngOnInit(): void {
    this.booKService.getBookById(this.id).subscribe(res => {
      this.formUpdate = this.fb.group({
        title: [res.title],
        author: [res.author],
        description: [res.description]
      })
    })
  }

  submit() {
    let data = this.formUpdate?.value
    this.booKService.update(data, this.id).subscribe(res => {
      this.router.navigate([''])
    })
  }

}
