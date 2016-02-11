import {bootstrap}  from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

import {Hello} from './hello/hello';
import {HelloService} from './hello/hello-service';

bootstrap(Hello, [
    HTTP_PROVIDERS, HelloService
]);