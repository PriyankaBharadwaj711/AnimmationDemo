import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _router: Router, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      pass: ["", Validators.required]
    })
  }
  navigateToHome(){
    console.log("home")
    this._router.navigate(['home']);
  }
  navigateToLogin(){
    console.log("login")
    
      this.dialog.open(LoginComponent,{ disableClose: true });
    
  }
}
