import { Injectable } from '@angular/core'

import { Observable, of} from 'rxjs'
import { map } from 'rxjs/operators'

import { Company } from './company'
import { COMPANIES } from './mock-companies'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(){}

  getCompanies():Observable<Company[]> {
    return of(COMPANIES)
  }

  getCompany(){
    return this.getCompanies().pipe(
      map((companies: Company[]) => companies.find(company => company.id === +id))
    )
  }

}