import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {NewsEffects} from './store/news.effects';

import { NewsService } from "./service/service.module";

@NgModule({
  declarations: [],
  imports: [
    EffectsModule.forFeature([NewsEffects])
  ],
  providers: [NewsService],
})
export class MovieModule {}
