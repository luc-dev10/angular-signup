import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [SignupComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [SignupComponent],
})
export class SignupModule {}
