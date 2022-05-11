import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
declare const responsiveVoice: any;
@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css']
})
export class QuestionModalComponent implements OnInit {

  constructor(private dialog: MatDialogRef<QuestionModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder) {

  }
  questions = ["You ever have stuff broken where you live?", "Have you ever not had a home?", "You ever not have clean clothes to wear ?","Does this ever happen to you, where you don't have enough food to eat?","How about you? Do you feel like your parent really cares about you?" ,"You ever have your electricity or water cut off where you live?","Have you ever thought about getting counseling to talk about your concerns and life? ","Please press the green 'Record' button to record and share any additional information about your life and then use the 'STOP' button to end the recording. Thank you for helping us out. "]
  audios = ["../../assets/questions/q1.mp3", "../../assets/questions/q2.mp3", "../../assets/questions/q3.mp3","../../assets/questions/q4.mp3","../../assets/questions/q5.mp3","../../assets/questions/q6.mp3","../../assets/questions/q16.mp3","../../assets/questions/q17_1.mp3",]
  currSrc = this.audios[this.data]
  currQuestion = this.questions[this.data]


  answerChosen: string | undefined = '';
  answers: string[] = ['Yes', 'No', 'Sometimes'];
  options!: FormGroup;
  isSelected: number | 0 | undefined;
  condition: boolean | false | undefined;
  selectedItem: any = 'yes';
  currentOptionItem: number = 0;
  answerSet :boolean = true;
  
  ngOnInit(): void {
    console.log("index recieved in modal", this.data)
    console.log(this.currSrc)
    this.options = this.fb.group({
      answer: [""]
    })
  }

  playOptions() {

    console.log("Play Options Being Called with value :- ", this.currentOptionItem);

    if (this.currentOptionItem < this.answers.length) {
      responsiveVoice.speak(this.answers[this.currentOptionItem], "UK English Female",
        {
          onstart: this.optionStartCallback(this.answers[this.currentOptionItem]),
          onend: this.optionEndCallback(this.answers[this.currentOptionItem])
        }
      );
    }
    else{
      console.log("in else cause option > len")
      responsiveVoice.speak("", "UK English Female",
      {
        onstart: this.optionStartCallback(""),
       
      }
      
    );
  }

 

    // if (this.currentOptionItem == this.answers.length - 1) {
    //   console.log("Entering inside if");
    //   this.selectedItem = '';
    // }



    // for (let i = 0; i < 3; i++) {
    //   console.log(this.answers[i])
    //   var text = this.answers[i]
    //   this.selectedItem = text;
    //   console.log("Selected Item :- ", text);
    //   responsiveVoice.speak(text, "UK English Female",
    //     {
    //       onstart: this.optionStartCallback(text),
    //       onend: this.optionEndCallback(text)
    //     }
    //   );
    // }
    // this.selectedItem = null;
  }

  answerSelectHandler(event: any){
    console.log("function called")
    console.log("chosen answer",event.value);
    this.answerChosen=event.value;
    this.answerSet=false;

  }
  optionStartCallback(text: any) {
    this.selectedItem = text;
    console.log("Selected Item :- ", text);
    // this.selectedItem = text;
    // console.log("Selected Item :- ", text);
    // this.condition = true
  }
  optionEndCallback(text: any) {

    // this.selectedItem = null;
    // console.log("Selected Item :- Null");
    // this.condition = false
    // console.log("Current Option Item Before incrementing :- ", this.currentOptionItem);

    this.currentOptionItem++;

    // console.log("Current Option Item After incrementing :- ", this.currentOptionItem);
    setTimeout(() => this.playOptions(), 1500);
  }
  optionChange() {
    // this.flag=false
    // console.log(this.flag)
  }
  closeDialog() {
    this.dialog.close(
      {
        saved: false
      }
    )
  }
  closeDialogAndSave(){
    this.dialog.close(
      {
        saved: true
      }
    )
  }

}
