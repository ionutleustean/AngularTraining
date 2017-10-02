import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LazyLoadEvent, SelectItem} from 'primeng/primeng';
import 'rxjs/add/operator/map';
import {PeopleService} from '../services/people-service/people.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    data :any;

    totalRecords: number = 14;

    names:SelectItem[] = [
        {label: 'All', value: null},
        {label: 'Ion', value: 'Tamra Mueller'},
        {label: 'Vasile', value: 'Wolf Mckinney'}
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private peopleService: PeopleService) {
    }

    ngOnInit() {
        let query:LazyLoadEvent = {
            first : 0,
            rows: 5
        };

        this.getData(query);
    }

    goToDetail(person: any) {
        this.router.navigate(
            ['../detail', person.id],
            {relativeTo: this.route}
        )
    }

    getData(event){
        this.peopleService.getPeople(event)
            .subscribe(
                (res) => {
                    console.log('res ',res);
                    this.data = res
                },
                (error) => {
                    console.log(error)
                }
            );

    }

    loadLazy(event: LazyLoadEvent) {
        console.log(event)
        this.getData(event);
    }
}


// ng g s modules/people/services/people