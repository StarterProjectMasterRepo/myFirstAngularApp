import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardComponentService {

  getContent(option: string): string {
    switch(option){
      case 'option1':
        return 'content for option';

      case 'option2':
        return 'content for option 2';

      case 'option3':
        return 'content for option 3';

      default: 
      return 'Default content';
    }
  }
}
