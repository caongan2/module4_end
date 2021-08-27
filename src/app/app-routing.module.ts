import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookAddComponent} from "./components/book-add/book-add.component";
import {BookUpdateComponent} from "./components/book-update/book-update.component";
import {BookDetailsComponent} from "./components/book-details/book-details.component";

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookAddComponent
  },
  {
    path: 'edit/:id',
    component: BookUpdateComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
