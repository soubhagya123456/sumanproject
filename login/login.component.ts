import { Component, OnInit } from '@angular/core';
import { PopComponent } from '../pop/pop.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  items: Array<any> = []



  constructor(public dialog:MatDialog) {

    this.items = [
      { name: 'assets/im1.jpg'},
      { name: 'assets/im2.jpg'},
      { name: 'assets/im3.jpg'},
      { name: 'assets/im4.jpg'},
      { name: 'assets/im5.jpg'},
      { name: 'assets/im6.jpg'},
      { name: 'assets/im7.jpg'},
      { name: 'assets/im8.jpg'},
      { name: 'assets/im9.jpg'},
      { name: 'assets/im10.jpg'},
      { name: 'assets/im11.jpg'},
    ]

   }

  ngOnInit() {
  }
  openDialog(){
    const dialogRef = this.dialog.open(PopComponent, {
      width: '450px',
      height:'380px',
    
    });

  }
}
