import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompanyListComponent} from './pages/companies/company-list/company-list.component'
import {CompanyDetailComponent} from './pages/companies/company-detail/company-detail.component'
import {HomeComponent} from './pages/home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'companies', component: CompanyListComponent },
  { path: 'company/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
