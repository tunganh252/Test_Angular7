import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { MaterialModule } from '../_core/share_data/material.module';

@NgModule({
  declarations: [HomeComponent, TinTucComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
  ]
})
export class HomeModule { }
