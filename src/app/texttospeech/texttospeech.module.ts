import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TexttospeechPage } from './texttospeech.page';

const routes: Routes = [
  {
    path: '',
    component: TexttospeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TexttospeechPage]
})
export class TexttospeechPageModule {}
