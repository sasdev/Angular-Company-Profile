import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompaniesComponent} from './pages/companies/companies.component'
import {CompanyDetailComponent} from './pages/company-detail/company-detail.component'
import {HomeComponent} from './pages/home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'company/:id', component: CompanyDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
