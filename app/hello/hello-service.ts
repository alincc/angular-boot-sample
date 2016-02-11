import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';

@Injectable()
export class HelloService {
    constructor(private http:Http){

    }

    getJson(){
        return this.http.get('/app/food.json')
            .map((res:Response) => res.json())
        );
    }
}