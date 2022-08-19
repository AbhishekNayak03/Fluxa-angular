import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule , } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { SearchFilterPipe } from './search-filter.pipe';
import { AuditComponent } from './audit/audit.component';
import { HomeComponent } from './home/home.component';
// import { FluxaauditComponent } from './fluxaaudit/fluxaaudit.component';
// import { SearchPipe } from './search.pipe';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    // SearchFilterPipe,
    // AuditComponent,
    HomeComponent,
    AuditComponent,
    // FluxaauditComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],

})
export class AppModule { }

