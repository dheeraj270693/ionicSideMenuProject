import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})

export class TexttospeechPage implements OnInit {
  textspeech:string;
  constructor() { }
  
  ngOnInit() {
  }
  

  // texttospeech(){
  //   // console.log(this.textspeech);
  //   this.tts.speak(this.textspeech)
  // .then(() => console.log('Success'))
  // .catch((reason: any) => console.log(reason));
  // }

}
