import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlBuilderService} from './url-builder.service';
import {LazyLoadEvent} from 'primeng/primeng';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IPerson} from './iPerson';

@Injectable()
export class PeopleService {

    baseUrl:string = 'https://ng-training-server.herokuapp.com/people/';

    header: HttpHeaders;

    constructor(private http: HttpClient,
                private urlBuilder: UrlBuilderService) {
        this.header = new HttpHeaders();

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

    getPersonById(id: string): Observable<IPerson>{
        return <Observable<IPerson>>this.http.get(`${this.baseUrl}/${id}`)
    }


    updatePerson(person):Observable<any>{
        this.header.append('Content-type','application/json');
        return this.http.put(
            `${this.baseUrl}/${person.id}`,
            person,
            {headers: this.header})
    }


}
