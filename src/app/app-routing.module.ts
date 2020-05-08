import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileListComponent } from './pages/profile/profile-list.component'


const routes: Routes = [
  { path: 'Profile-list', component: ProfileListComponent },
  { path: '', component: ProfileListComponent }
];

@NgModule({
  declarations: [
    ProfileListComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
