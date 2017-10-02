import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../services/people-service/people.service';
import {Person} from '../services/people-service/people.interface';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    id: string;
    person: Person;
    model: Person;
    edit: boolean = false;

    constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService) {

    }

    ngOnInit() {

        this.id = this.activatedRoute.snapshot.params.id;


        this.peopleService.getPeopleById(this.id).subscribe(
            data => {
                this.person = data;
                this.model = {...this.person};
            },
            error => {
                console.log(error)
            }
        )

    }

    toggleEdit() {
        this.model = {...this.person};
        this.edit = !this.edit;
    }

    onSubmit() {
        this.person = {...this.model};
        this.peopleService.updatePersonById(this.model).subscribe()
        this.toggleEdit();
    }

}
