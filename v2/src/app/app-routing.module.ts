import { NgModule } from '@angular/core';
import { MathComponent } from './math/math.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:"/", pathMatch:'full'},
  {path:'math:/:suburl',component:MathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
