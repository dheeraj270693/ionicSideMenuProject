import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-texttospeech',
  templateUrl: './texttospeech.page.html',
  styleUrls: ['./texttospeech.page.scss'],
})

export class TexttospeechPage implements OnInit {
  textspeech:string;
  constructor(private tts: TextToSpeech) { }
  
  ngOnInit() {
  }
  

  texttospeech(){
    // console.log(this.textspeech);
    this.tts.speak(this.textspeech)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
  }

}
