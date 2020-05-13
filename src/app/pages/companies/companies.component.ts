import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  public TestData = [
  {id:1,name: 'Microsoft'},
  {id:2,name: 'Google'},
  {id:3,name: 'Amazon'},
  ]

  constructor() { }
  
  
  ngOnInit() {
  }

}