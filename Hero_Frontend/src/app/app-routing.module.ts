import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path : '',component:ListComponent} ,
  {path : 'ajout',component:AjoutComponent},
  {path : 'list',component:ListComponent},
  {path : '**',component:NotfoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
