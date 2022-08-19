import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuditComponent } from './audit/audit.component';
import {TableComponent} from './table/table.component';

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'audit', component: AuditComponent },
  { path: 'table', component: TableComponent },
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [AuditComponent]
// export const routingComponents = [TableComponent]

