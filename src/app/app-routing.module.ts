import { TableComponent } from './table/table.component';
import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { component: TableComponent, path:""},
  { component : NewComponent, path: 'open/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
