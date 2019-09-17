import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

import { MatButtonModule, MatFormFieldModule, MatInputModule,
      MatSelectModule, MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule,
    MatRadioModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
