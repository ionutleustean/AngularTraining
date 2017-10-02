import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UrlBuilderService} from '../url-builder.service';
import {LazyLoadEvent} from 'primeng/primeng';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Person} from './people.interface';

@Injectable()
export class PeopleService {

    baseUrl: string = 'https://ng-training-server.herokuapp.com/people';
    headers: HttpHeaders;

    constructor(private http: HttpClient,
                private urlBuilder: UrlBuilderService) {
        this.headers = new HttpHeaders();
    }

    getPeople(event: LazyLoadEvent): Observable<Person[]> {
        return <Observable<any>>this.http.get(
            this.urlBuilder.createUrlFromLazyLoadEvent(
                this.baseUrl,
                event
            )
        ).map(
            (res: any[]) => {

                res.map((value, index) => {
                    value.originalEmail = value.email;
                    value.email = "***";
                });
                return res;
            }
        )
    }

    getPeopleById(id: string): Observable<Person> {
        return <Observable<Person>> this.http.get(`${this.baseUrl}/${id}`)
    }

    updatePersonById(person: Person) {
        this.headers.append('Content-Type', 'application/json');

        return this.http.put(`${this.baseUrl}/${person.id}`, person, {headers: this.headers})
    }

}


