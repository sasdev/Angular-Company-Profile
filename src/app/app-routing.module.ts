import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './pages/profile/profile-list.component'



const routes: Routes = [
  { path: '', component: ProfileListComponent },
  { path: 'Profile-list', component: ProfileListComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
