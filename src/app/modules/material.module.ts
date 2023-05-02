import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandpageComponent } from 'src/app/landpage/landpage.component';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LandpageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
