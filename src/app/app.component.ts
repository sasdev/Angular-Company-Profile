import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

   //Used to store links for router
   links = this.router.config
   links2 = JSON.stringify(this.links) 
   
   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
     .pipe(
       map(result => result.matches),
       shareReplay()
     );

    constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

}
