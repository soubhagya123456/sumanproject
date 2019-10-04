import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopComponent } from '../pop/pop.component';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  constructor(public dialog:MatDialog) { 
   /* this.dialog.closeAll(PopComponent);*/
  }

  ngOnInit() {
  }

}
