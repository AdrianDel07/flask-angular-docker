import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components imports
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books', component: LayoutComponent, children: [
    {path: '', loadChildren: () => import('./feature/books/books.module').then(m => m.BooksModule)}

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
