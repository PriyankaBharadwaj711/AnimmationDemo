import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {HTTPService} from 'src/app/services/http.service'
import { APIConfig } from 'src/config/api.config';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  hide = true;
  incompleteFields = false;
  wrongPass =false;
  constructor(
    public dialModalRef: MatDialogRef<any>,
    private fb: FormBuilder,
    private httpService: HTTPService,
    private _router: Router,) { }

  ngOnInit(): void {
    
      this.dialModalRef.updatePosition({ top: '7vh', right: '1%' });
      this.login = this.fb.group({
        username: ["", Validators.required],
        password:["",Validators.required]
      })
  
  }
  validateLogin(){
    if (this.login.invalid){
      this.login.markAllAsTouched();
      console.log(this.incompleteFields)
      this.incompleteFields=true;
      console.log("invalid login")
      console.log(this.incompleteFields)
      this.wrongPass=false;
      
    }
    else if(this.login.valid){
       var responseData = {
        userid:this.login.controls.username.value,
        password:this.login.controls.password.value,
       };
  
       console.log("response",responseData)
        this.httpService.fetchRequest(APIConfig.loginPost,
          "POST",
          responseData 
         )
          .then((response: any) => {
            if (!(response == undefined || response == null)) {
    
              console.log( response)
              this.dialModalRef.close();
              this._router.navigate(['adminDash']);
              
            } else {
              console.log( response)
              console.log(this.wrongPass)
              console.log("error in post")
              this.wrongPass=true;
              this.incompleteFields=false;
              console.log(this.wrongPass)
              
            }
          });
      }
    else{
      // this._router.navigate(['adminDash']);
    }
  }

}
