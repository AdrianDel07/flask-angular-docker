import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksManagementComponent } from './containers/books-management/books-management.component';
import { TableComponent } from './components/table/table.component';
import { AddComponent } from './add/add.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { BookService } from './service/book.service';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/books.effects';

@NgModule({
  declarations: [
    BooksManagementComponent,
    TableComponent,
    AddComponent,
    DialogComponent,
  ],
  entryComponents: [AddComponent, DialogComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([BookEffects]),
    // StoreModule.forRoot({ books: bookReducer }),
  ],
  providers: [BookService],
})
export class BooksModule {}
