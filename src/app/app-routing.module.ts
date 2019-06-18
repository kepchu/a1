import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { TextInputComponent } from './text-input/text-input.component';
import { SwitchComponent } from './switch/switch.component'
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  { path: 'compare', component: TextInputComponent },
  { path: 'directives', component: SwitchComponent},
  { path: 'circle', component: CircleComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
