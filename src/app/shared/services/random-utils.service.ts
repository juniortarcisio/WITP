import { Injectable } from '@angular/core';

@Injectable()
export class RandomUtilsService {

  constructor() { }

  public cleanRouteName(name:String) {
    return name.replace(/\s/g, '').replace(/[^\w\s]/gi, '');
  }

  public getAnimationDuration(i:number) {
    i++;
    if (i>10)i=10;
    return "animate-duration-x" + i.toString();
  }
}
