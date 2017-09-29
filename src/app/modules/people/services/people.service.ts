import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UrlBuilderService} from './url-builder.service';
import {LazyLoadEvent} from 'primeng/primeng';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

    baseUrl:string = 'https://ng-training-server.herokuapp.com/people';

    constructor(private http: HttpClient,
                private urlBuilder: UrlBuilderService) {
    }

    getPeople(event: LazyLoadEvent):Observable<any[]>{
        return<Observable<any>>this.http.get(
            this.urlBuilder.createUrlFromLazyLoadEvent(
                this.baseUrl,
                event
            )
        ).map(
            (res: any[]) => {

                res.map((value, index)=> {
                    value.originalEmail = value.email;
                    value.email= "***";
                });
                return res;
            }
        )
    }

}
