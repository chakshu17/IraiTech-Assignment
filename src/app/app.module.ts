import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './module/material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionOneComponent } from './components/question-one/question-one.component';
import { QuestionThreeComponent } from './components/question-three/question-three.component';
import { MainBoardComponent } from './components/question-four/main-board/main-board.component';
import { FirstComponentComponent } from './components/question-four/first-component/first-component.component';
import { SecondComponentComponent } from './components/question-four/second-component/second-component.component';
import { ThirdComponentComponent } from './components/question-four/third-component/third-component.component';
import { FourthComponentComponent } from './components/question-four/fourth-component/fourth-component.component';
import { FifthComponentComponent } from './components/question-four/fifth-component/fifth-component.component';

@NgModule({
  declarations: [AppComponent, QuestionOneComponent, QuestionThreeComponent, MainBoardComponent, FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent, FifthComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
