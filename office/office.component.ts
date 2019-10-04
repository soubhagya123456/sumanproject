import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  prev(){
    alert("here is the msg")
  }
  clear(){
    alert("clear the data ")
  }
  mark(){
    alert("mark the data")
  }
  save(){
    alert("save the data")
  }


  // openDialog(): void {
  //   const dialogRef = this.dialog.open(OfficeComponentDialog, {
  //     width: '250px',
     
  //   });

   
  }

