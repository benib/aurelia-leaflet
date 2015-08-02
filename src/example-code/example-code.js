import {inject, bindable} from 'aurelia-framework'
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class ExampleCodeCustomElement {
  @bindable jsFile
  @bindable htmlFile

  constructor(HttpClient) {
    this.httpClient = HttpClient;

    this.jsLoadedPromise = new Promise((resolve, reject) => {
      this.jsLoadedResolve = resolve;
      this.jsLoadedReject = reject;
    });

    this.htmlLoadedPromise = new Promise((resolve, reject) => {
      this.htmlLoadedResolve = resolve;
      this.htmlLoadedReject = reject;
    });

  }

  jsFileChanged() {
    this.httpClient.get(`../src/examples/${this.jsFile}`).then((response) => {
      this.js = response.content.replace(/\/\/ demo[\s\S]*?\/\/ demoend/g, '');
      this.jsLoadedResolve();
    });
  }

  htmlFileChanged() {
    this.httpClient.get(`../src/examples/${this.htmlFile}`).then((response) => {
      this.html = response.content.replace(/<!-- demo -->[\s\S]*?<!-- demoend -->/g, '');
      this.htmlLoadedResolve();
    });
  }

  attached() {
    this.jsLoadedPromise.then(() => {
      hljs.highlightBlock(this.jsElement);
    });
    this.htmlLoadedPromise.then(() => {
      hljs.highlightBlock(this.htmlElement);
    });
  }
}
