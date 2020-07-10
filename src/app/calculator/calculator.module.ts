import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './components/calculator.component';
import { CalculatorService } from './services/calculator.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalculatorComponent
  ],
  exports:[
    CalculatorComponent
  ], 
  providers: [
    CalculatorService
  ]
})

export class CalculatorModule { }
