import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SpeechService {

  mute:boolean = false;

  //private muteSource = new BehaviorSubject<boolean>(this.mute);
  //currentMute = this.muteSource.asObservable();

  constructor() { }

  toggleMute(){
    this.mute = !this.mute;
    //this.muteSource.next(this.mute);
  }

}
