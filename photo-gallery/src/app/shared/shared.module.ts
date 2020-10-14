import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoService } from './services/photo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PhotoService
  ]
})
export class SharedModule { }
