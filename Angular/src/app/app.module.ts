import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import { NewsService } from "./pages/news/service/service.module";
import {NewsEffects} from './pages/news/store/news.effects';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { NewsComponent } from './pages/news/news.component';
import { MaterialModule} from './shared/material/material.module';
import { DialogComponent } from './shared/dialog/dialog.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    RegisterComponent,
    NewsComponent,
  
    RegisterComponent,
    NewsComponent,
    HomeComponent,
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    EffectsModule.forRoot([NewsEffects]),
    EntityDataModule.forRoot(entityConfig),
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
