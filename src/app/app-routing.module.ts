import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NComponent } from './n/n.component';
import { XComponent } from './x/x.component';

const routes: Routes = [
  { path: 'first', component: NComponent },
  { path: 'second', component: XComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

