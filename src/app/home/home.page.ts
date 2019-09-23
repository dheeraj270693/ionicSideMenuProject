import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonLabel } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router } from '@angular/router';
import {  NgZone } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  commandMatched: Boolean = false;
  myMatches : string[] = [];
  commands = ["HELLO", "GO TO NEXT PAGE", "GO BACK"];
  constructor(private router: Router, 
    private alertController : AlertController, 
    private speechRecognition : SpeechRecognition,
    private zone :NgZone) {
    
    this.prepareForListening();
    //this.keepListening();
  }
  keepListening(){
    setInterval(()=>{
      if (!this.commandMatched){
        this.stopListening();
        this.startListening();
      }
    },3000)
  }
  
checkText(myText: string[]){

    if (myText.length > 0){
      console.log(myText[0].toUpperCase);
        //console.log("The length of the result is :" + myText.length);
      for(let i=0; i<myText.length; i++){
        // console.log(this.commands[i]);
          if (myText[i].toUpperCase() == this.commands[0]){
            console.log("YESSSSSSSS hello there");
            this.IslamFunction("Hi there");
          } else{
            if (myText[i].toUpperCase() == this.commands[1]){
              console.log("YESSSSSSSS next page");
              this.router.navigateByUrl('list');
          }
          }
          
        }
        
      }
    }
    IslamFunction(myText: string){

    }
  prepareForListening(){
    this.speechRecognition.isRecognitionAvailable()
    .then((available: boolean) => 
    this.speechRecognition.hasPermission()
    .then((hasPermission: boolean) => {
      console.log(hasPermission)
      if (!hasPermission){
    this.speechRecognition.requestPermission()
    .then(
      () => {
      console.log('Granted');
      console.log(available);
    },
      () => console.log('Denied')
      )}
    })
      )
  }

  startListening(){
    // let options = {
    //   language: 'en-US',
    //   partialShow: true
    // }
    
    //let _this = this;
    this.speechRecognition.startListening()
    .subscribe(
      (matches: string[]) => {
        this.checkText(matches);
       },
      (onerror) => console.error('This is the error we are having:', onerror)
    )
    setTimeout(() => {
      this.stopListening();
    }, 3000);
  }
  stopListening(){
    this.speechRecognition.stopListening();
  }
  stopListeningForever(){
    this.speechRecognition.stopListening();
    this.commandMatched = true;
    //this.router.navigateByUrl('list');
  }


}
