import {Component} from 'angular2/core';

import {HelloService} from './hello-service';

@Component({
    selector: 'hello',
    templateUrl: './app/hello/hello.html'
})
export class Hello {
    yourName: string = '';

    constructor(private hs: HelloService){

    }

    ngOnInit() {
        this.hs.getJson().subscribe(
            data => {
                this.foods = data
            },
            err => console.error(err),
            () => console.log('JSON Loaded!')
        )
    }
}