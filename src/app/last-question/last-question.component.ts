import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgAudioRecorderService, OutputFormat } from 'ng-audio-recorder';
import * as RecordRTC from 'recordrtc';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as moment from 'moment';
import { AudioRecordingService } from './audio-recording.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

interface RecordedAudioOutput {
  blob: Blob;
  title: string;
}


@Component({
  selector: 'app-last-question',
  templateUrl: './last-question.component.html',
  styleUrls: ['./last-question.component.css']
})
export class LastQuestionComponent implements OnInit {

  isRecording = false;
  recordedTime: any;
  blobUrl: any;
  currQuestion:string="You can share a question you have or something about your life or something you want help with . Just press the green record button." ;
  questionAudio:string="../../assets/questions/q4.mp3";
  constructor(
    private dialog: MatDialogRef<LastQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    // private audioRecorderService: NgAudioRecorderService,
    private audioRecordingService: AudioRecordingService,
    private sanitizer: DomSanitizer,
    private _router: Router, 
  ) {
    // this.audioRecorderService.recorderError.subscribe(recorderErrorCase => {
    //   console.log("Error while recording", recorderErrorCase);
    // })

    this.audioRecordingService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecordingService.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audioRecordingService.getRecordedBlob().subscribe((data) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
    });

  }

  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecordingService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecordingService.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audioRecordingService.stopRecording();
      this.isRecording = false;
    }
  }

  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnInit(): void {
  }


  closeDialog() {
    this.dialog.close(
      {
        saved: false
      }
    )
    this._router.navigate(['end']);

  }
  // startRecording() {
  //   this.audioRecorderService.startRecording();
  // }

  // async stopRecording() {
  //   const recordingOutput = await this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB);
  //   let newBlob = new Blob([recordingOutput as BlobPart], { type: 'audio/mpeg-3' });

  //   // this.blobURL = newBlob;

  //   console.log(newBlob);

  //   this.audioRecorderService.stopRecording(OutputFormat.WEBM_BLOB).then((output) => {
  //     console.log("recording stopped", recordingOutput)

  //     // do post output steps
  //   }).catch(errrorCase => {
  //     // Handle Error
  //     console.log("error in recording")
  //   });
  // }
}
