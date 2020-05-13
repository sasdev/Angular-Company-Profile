import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router'

import { CompanyService } from '../company.service'
import { Company} from '../company'

@Component({
  selector: 'app-home',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public TestData = [
  {id:1,name: 'Microsoft'},
  {id:2,name: 'Google'},
  {id:3,name: 'Amazon'},
  ]

  companies$: Observable<Company[]>
  selectedId: number;

  constructor(    
    private service: CompanyService,
    private route: ActivatedRoute
    ) {}
  
  
  ngOnInit() {
    this.companies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id')
        return this.service.getCompanies()
      })
    )
  }

}