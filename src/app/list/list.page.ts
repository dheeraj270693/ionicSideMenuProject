import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  commands = ["HELLO", "GO TO NEXT PAGE", "GO BACK"];
  
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(private router: Router, 
    private speechRecognition : SpeechRecognition,) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  startListening(){
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
            if (myText[i].toUpperCase() == this.commands[2]){
              console.log("YESSSSSSSS previous page");
              this.router.navigateByUrl('home');
          }
          }
          
        }
        
      }
    }
    IslamFunction(myText: string){

    }
}
