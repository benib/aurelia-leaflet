import {inject, bindable} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client';

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
    this.httpClient.fetch(`./src/examples/${this.jsFile}`)
      .then(response => response.text())
      .then(text => {
        this.jsElement.textContent = text.replace(/\/\/ demo[\s\S]*?\/\/ demoend/g, '');
        this.jsLoadedResolve();
      });
  }

  htmlFileChanged() {
    this.httpClient.fetch(`./src/examples/${this.htmlFile}`)
      .then(response => response.text())
      .then(text => {
        this.htmlElement.textContent = text.replace(/<!-- demo -->[\s\S]*?<!-- demoend -->/g, '');
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
