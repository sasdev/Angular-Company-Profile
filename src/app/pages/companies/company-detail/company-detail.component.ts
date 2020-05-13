import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit{

data = ""

constructor(
  private router: ActivatedRoute
) {}

ngOnInit(){
  console.log(this.router.snapshot.params)
  this.data = this.router.snapshot.params.id
}


}