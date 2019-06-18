import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ControlsComponent } from './controls/controls.component';
import { TextInputComponent } from './text-input/text-input.component';
import { ResultComponent } from './result/result.component';
import { AppRoutingModule } from './app-routing.module';
import { SwitchComponent } from './switch/switch.component';
import { StatusGoodComponent } from './switch/status-good/status-good.component';
import { StatusBadComponent } from './switch/status-bad/status-bad.component';
import { CircleComponent } from './circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlsComponent,
    TextInputComponent,
    ResultComponent,
    SwitchComponent,
    StatusGoodComponent,
    StatusBadComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
