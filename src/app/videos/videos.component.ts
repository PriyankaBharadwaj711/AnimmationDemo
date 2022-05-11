import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { LastQuestionComponent } from '../last-question/last-question.component';
import { QuestionModalComponent } from '../question-modal/question-modal.component';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(
    public dialog: MatDialog, 
    private _router: Router,  ) {
    
  }

  


  video = ["../../assets/scene1.mp4" ,"../../assets/scene2.mp4", "../../assets/scene3.mp4","../../assets/scene4.mp4","../../assets/scene5.mp4","../../assets/scene6.mp4","../../assets/scene16.mp4","../../assets/scene17.mp4"]
  scene = ["Scene 1","Scene 2","Scene 3","Scene 4","Scene 5", "Scene 6", "Scene 7", "Scene 8"]
  index = 0;
  len = 7
  currSrc ="../../assets/scene1.mp4"
  currScene = this.scene[0]
  chatIsToggled=false

  title = 'ng-bootstrap-modal-demo';
  closeResult: string | undefined;
  modalOptions:NgbModalOptions | undefined;
  display='none';
  
  vidEnded(){
  
    if (this.index <= this.len-1){
      // this.index = this.index+1
      console.log("incremented index",this.index)
      this.chatIsToggled=true
      // this.currSrc = this.video[this.index] 
      var onEnded=this.dialog.open(QuestionModalComponent,{data:this.index ,
        disableClose:true})
        console.log(this.index)
        onEnded.afterClosed().subscribe(result => {
          console.log("saved=",result.saved)
          if (result.saved == true){
            console.log("before incrementing",this.index)
            this.index = this.index+1
            console.log("after incrementing",this.index)
            this.currSrc = this.video[this.index] 
            this.currScene = this.scene[this.index]
          }
        })
    }
    else if(this.index == this.len){
      console.log("incremented index",this.index)
      this.chatIsToggled=true
      this.currSrc = this.video[this.index] 
      this.currScene = this.scene[this.index]
      var onEndedlast=this.dialog.open(LastQuestionComponent)
      console.log(onEndedlast)
       
    }

    
  }
   closeModal(){
    this.currSrc = this.video[this.index] 
    this.chatIsToggled=false
   }

  ngOnInit(): void {
    
  }
  navigateToHome(){
    this._router.navigate(['home']);
  }

 
}
