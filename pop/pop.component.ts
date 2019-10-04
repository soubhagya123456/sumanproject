import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {

  loginVar = true;

  constructor(private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login() {
    if(this.username == 'soubhagya' && this.password == 'swain'){
     this.router.navigate(["front"]);
     let myArr = [];

     var myObj = JSON.stringify({
       name:this.username,
       password:this.password
     });

     myArr.push(myObj);

     localStorage.setItem("loginData",JSON.stringify(myArr));
     
      //localStorage.setItem('items', JSON.stringify(this.username && this.password));
      //localStorage.getItem('items');

    }else {
      alert("Invalid");
    }
  }


  // login(uname:string, pass:string)
  // {
  //   var login = false;
  //   //alert(uname + "-----"+ pass);
  //   var alluser = JSON.parse(localStorage.getItem("user"));
  //   if(alluser ==null)
  //   {
  //     alert("No such user exist ! please register")
  //   }else{
  //     for(var i=0; i<alluser.length; i++)
  //     {
  //       if( (uname==alluser[i].email) && (pass==alluser[i].pass) )
  //       {
  //         login=true;
  //       }
  //     }
  signup(){
    this.loginVar = false;
  }

  account(username:string, pass:string, email:string)
      {
        var user = JSON.parse(localStorage.getItem("user"));
        if(user ==null)
        {
          var user:any=[];
          var newuser = {"uname":username, "pass":pass, "email":email};
          user = user.concat(newuser);
          localStorage.setItem("user", JSON.stringify(user));
          // alert("user.length");
            }else{
          var newuser = {"uname":username, "pass":pass, "email":email};
          var alluser = user.concat(newuser);
          localStorage.setItem("user", JSON.stringify(user));
         
      }
        
       
    }
  } 

