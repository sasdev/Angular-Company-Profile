import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CompaniesComponent} from './pages/companies/companies.component'
import {HomeComponent} from './pages/home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Profile-list', component: CompaniesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
