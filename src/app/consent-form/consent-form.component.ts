import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConsentPdfComponent } from '../consent-pdf/consent-pdf.component';
import { SampleVideoComponent } from '../sample-video/sample-video.component';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-consent-form',
  templateUrl: './consent-form.component.html',
  styleUrls: ['./consent-form.component.css']
})
export class ConsentFormComponent implements OnInit {

  consent!: FormGroup;
  constructor(private router: ActivatedRoute, private _router: Router, public dialog: MatDialog, private fb: FormBuilder) {

  }
  constraints = { audio: true }; 
  ngOnInit(): void {
    navigator.mediaDevices.getUserMedia(this.constraints)
    .then(function(mediaStream) {
      console.log(mediaStream)
      // var video = document.querySelector('video');
      
    })
    .catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end.
    
    console.log("navigation",this._router.onSameUrlNavigation)
    

    this.consent = this.fb.group({
      sign: ["", Validators.required]
    })

    this.router.queryParams.subscribe(params => {
      if (params?.name != (undefined || null)) {
        this.consent.controls['sign'].setValue(params?.name);
      }
      console.log(params.name);
    })

  }
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  navigateToDemo() {

    if (this.consent.invalid || this.date.value == (null || undefined)) {
      this.consent.markAllAsTouched();
      console.log("Handle the Swal Alert");
      Swal.fire('Fields marked in red are mandatory.')
    }
    else {
      this._router.navigate(['demo'], { queryParams: { name: this.consent.controls.sign.value } });
    }
    // this._router.navigate(['demo'])
  }
  openConsent() {

    console.log(this.consent.value)
    this.dialog.open(ConsentPdfComponent);
  }
  openSampleVideo() {
    this.dialog.open(SampleVideoComponent);
  }
}
