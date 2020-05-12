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
export class ProfileListComponent implements OnInit {

  public TestData = [
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'},
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'}
  ]

  columnsToDisplay = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  constructor() { }
  
  
  ngOnInit() {
  }

}