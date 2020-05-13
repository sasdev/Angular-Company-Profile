import { Component, OnInit } from "@angular/core"
import { switchMap } from 'rxjs/operators'
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { Observable } from 'rxjs'

import { CompanyService } from  '../company.service'
import { Company } from '../company'



@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})

export class CompanyDetailComponent implements OnInit{

data = ""

company$: Observable<Company>

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private service: CompanyService
) {}

ngOnInit(){
  console.log(this.router.snapshot.params)
  this.data = this.router.snapshot.params.id
  this.company$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.service.getCompany(params.get('id')))
  )
}


}