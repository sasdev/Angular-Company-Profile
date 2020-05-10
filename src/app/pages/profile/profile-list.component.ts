import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-home',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  public testData = [
  {position:1,name: 'Hydrogen', weight: 1.023, symbol: 'H'}
  ]

  columnsToDisplay = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

  constructor() { }
  
  
  ngOnInit() {
  }

}