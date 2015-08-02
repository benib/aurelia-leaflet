import {computedFrom} from 'aurelia-framework';

export class QuickStart {
  attached() {
    for (let i=0; i < this.container.querySelectorAll('code').length; i++) {
      hljs.highlightBlock(this.container.querySelectorAll('code').item(i));
    }
    
  }
}

