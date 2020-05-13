import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { CompanyListComponent } from './company-list/company-list.component'
import { CompanyDetailComponent } from './company-detail/company-detail.component'
import companyDetailComponentCss from './company-detail/company-detail.component.css'

//import child routing module?

@NgModule({
  imports: [
    CommonModule,
    FormsModule
    //child routing module
  ],
  declarations: [
    CompanyListComponent,
    CompanyDetailComponent
  ]
})
export class CompaniesModule {}
