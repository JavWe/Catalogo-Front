import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from 'src/app/landpage/landpage.component';

import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    LandpageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
