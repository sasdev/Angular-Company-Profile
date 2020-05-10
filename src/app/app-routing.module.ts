import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileListComponent} from './pages/profile/profile-list.component'
import {HomeComponent} from './pages/home/home.component'



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Profile-list', component: ProfileListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
