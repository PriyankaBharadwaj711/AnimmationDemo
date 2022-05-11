import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { invalid } from '@angular/compiler/src/render3/view/util';
import {HTTPService} from 'src/app/services/http.service'
import { APIConfig } from 'src/config/api.config';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-demographic-form',
  templateUrl: './demographic-form.component.html',
  styleUrls: ['./demographic-form.component.css']
})
export class DemographicFormComponent implements OnInit {
  demographic!: FormGroup;
  constructor(
    private router: ActivatedRoute, 
    private _router: Router, 
    private fb: FormBuilder,
    private httpService: HTTPService,
    ) {
  }
  
 

  constraints = { audio: true }; 

  signConsentValue: string = "";

  age = [
    // {id:"0",value:"Choose Age in Years"},
    { id: "6", value: "6" },
    { id: "7", value: "7" },
    { id: "8", value: "8" },
    { id: "9", value: "9" },
    { id: "10", value: "10" },
    { id: "11", value: "11" },
    { id: "12", value: "12" },
    { id: "13", value: "13" },
    { id: "14", value: "14" },
    { id: "15", value: "15" },
    { id: "16", value: "16" },
    { id: "17", value: "17" },
    { id: "18", value: "18" },
  ]

  grade = [
    // {id:"0",value:"Choose grade"},
    { id: "1", value: "1st Grade" },
    { id: "2", value: "2nd Grade" },
    { id: "3", value: "3rd Grade" },
    { id: "4", value: "4th Grade" },
    { id: "5", value: "5th Grade" },
    { id: "6", value: "6th Grade" },
    { id: "7", value: "7th Grade" },
    { id: "8", value: "8th Grade" },
    { id: "9", value: "9th Grade" },
    { id: "10", value: "10th Grade" },
    { id: "11", value: "11th Grade" },
    { id: "12", value: "12th Grade" },

  ]

  clinic = [
    { id: "Sood", value: "Dr. Sood Clinic" },
    { id: "kaprea", value: "Dr. Kaprea Clinic" }
  ]

  // Anxiety
  // Depression
  // Behavioral problems
  // Conduct disorder
  // ADHD/ADD
  // Autism Spectrum disorder
  // Chronic medical condition
  // None of the above

  disorder = [
    { name: "ADHD/ADD", value: "ADHD/ADD" },
    { name: "Anxiety", value: "Anxiety" },
    { name: "Autism Spectrum disorder", value: "Autism Spectrum disorder" },
    { name: "Behavioral Problems", value: "Behavioral Problems" },
    { name: "Conduct disorder", value: "Conduct disorder" },
    { name: "Chronic medical condition", value: "Chronic medical condition" },
    { name: "Depression", value: "Depression" },
    { name: "None of the above", value: "None of the above" },


  ]

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.demographic.get('disorder') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }


  ngOnInit(): void {
    
    navigator.mediaDevices.getUserMedia(this.constraints)
.then(function(mediaStream) {
  var video = document.querySelector('video');
  
})
.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.

      
    this.demographic = this.fb.group({
      childname: ["", Validators.required],
      parentname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      relationship: ["", Validators.required],
      disorder: this.fb.array([]),
      // disorder :[""],
      ethnicity: ["", Validators.required],
      gender: ["", Validators.required],
      age: ["", Validators.required],
      grade: ["", Validators.required],
      zipcode: ["", Validators.required],
      freelunch: ["", Validators.required],
      skipmeals: ["", Validators.required],
      homeless: ["", Validators.required],
      utilities: ["", Validators.required],
      appliances: ["", Validators.required],
      care: ["", Validators.required],
      transportation: ["", Validators.required],
      resources: ["", Validators.required],
      clinic: ["", Validators.required],
      comments: [""]

    });

    this.router.queryParams.subscribe(params => {
      if (params?.name != (undefined || null)) {
        this.signConsentValue = params?.name;
        this.demographic.controls['parentname'].setValue(this.signConsentValue);
      }
      console.log(params.name);
    })
    
  }
  navigateToIntro() {
    if (this.demographic.invalid) {
      console.log("missing values")
      console.log(this.demographic.value)
      this.demographic.markAllAsTouched();
      console.log("Handle the Swal Alert");
      Swal.fire('Fields marked in red are mandatory.')
    }
    else if(this.demographic.valid){
     var responseData = {
      child:this.demographic.controls.childname.value,
      parentName:this.demographic.controls.parentname.value,
      email:this.demographic.controls.email.value,
      age:this.demographic.controls.age.value,
      relationship:this.demographic.controls.relationship.value,
      transportation:this.demographic.controls.transportation.value,
      gender:this.demographic.controls.gender.value,
      race:this.demographic.controls.ethnicity.value,
      grade:this.demographic.controls.grade.value,
      lunchStatus:this.demographic.controls.freelunch.value,

     };

     console.log("response",responseData)
      this.httpService.fetchRequest(APIConfig.postDemographicDetails,
        "POST",
        responseData 
       )
        .then((response: any) => {
          if (!(response == undefined || response == null)) {
  
            console.log( response)
            this._router.navigate(['intro'])
            
          } else {
            
            console.log("error in post")
          }
        });
    }
    // else {
    //   this._router.navigate(['intro'])
    // }
    // this._router.navigate(['intro'])
  }
  navigateToHome() {
    if (this.signConsentValue != "") {
      if(this.demographic.controls['parentname'].value != (null || undefined)) {
        this._router.navigate(['home'], { queryParams: { name: this.demographic.controls['parentname'].value} })
      } else {
        this._router.navigate(['home'], { queryParams: { name: this.signConsentValue } })
      }
      
    } else {
      this._router.navigate(['home']);
    }

  }



}
