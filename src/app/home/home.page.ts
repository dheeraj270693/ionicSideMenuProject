import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonLabel } from '@ionic/angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  commandMatched: Boolean = false;
  myMatches : string[] = [];
  commands = ["HELLO", "GO TO NEXT PAGE"];
  constructor(private alertController : AlertController, private speechRecognition : SpeechRecognition) {
    
    this.prepareAndStartListening();
    this.keepListening();
  }
  keepListening(){
    setInterval(()=>{
      if (!this.commandMatched){
        this.stopListening();
        this.startListening();
      }
    },3000)
  }
  
checkText(myText: String[]){
    if (myText.length > 0){
      console.log("The length of the result is :" + myText.length);
      for(let i=0; i<this.commands.length; i++){
        console.log(myText[0]);
        console.log(this.commands[i]);
        
        if (myText[0].toUpperCase() == this.commands[i]){
            console.log("YESSSSSSSS");
        }
      }
    }
    
}

  prepareAndStartListening(){
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
      this.startListening();
    })
      )
  }

  startListening(){
    // let options = {
    //   language: 'en-US',
    //   partialShow: true
    // }
    this.speechRecognition.startListening()
    .subscribe(
      (matches: string[]) => {
       //this.myMatches = matches;
       console.log("The index 0 in result is:" + matches[0]);
    
      this.checkText(matches);
      //  if (matches.length > 0){
      //   console.log("The length of the result is :" + matches.length);
      //   for(let i=0; i<this.commands.length; i++){
      //     console.log("The index 0 in result is:" + matches[0]);
      //     console.log("The commands item is:" + this.commands[i]);
          
      //     if (matches[0].toUpperCase() == this.commands[i]){
      //         console.log("YESSSSSSSS");
      //     }
      //   }
      // }
       },
      (onerror) => console.error('This is the error we are having:', onerror)
    )
  }
  stopListening(){
    this.speechRecognition.stopListening()
  }


}
