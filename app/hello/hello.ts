import {Component} from 'angular2/core';

@Component({
    selector: 'hello',
    templateUrl: './app/hello/hello.html'
})
export class Hello {
    yourName: string = '';
}