import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PeopleService} from '../services/people.service';
import {IPerson} from '../services/iPerson';

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

    id: string;

    person: IPerson;

    model: IPerson;

    edit: boolean = false;

    constructor(private activatedRoute: ActivatedRoute,
                private peopleService: PeopleService) {

    }

    ngOnInit() {

        this.id = this.activatedRoute.snapshot.params['id'];

        this.peopleService.getPersonById(this.id)
            .subscribe(
                (data) => {
                    this.person = data;
                    this.model = {...this.person};
                },
                (error) => {
                    console.log(error)
                }
            )

    }

    toggleEdit() {
        this.edit = !this.edit;
    }

    onSubmit() {
        this.peopleService.updatePerson(this.model).subscribe(
            (data) => {
                this.person = <IPerson>{...this.model};
            },
            (error) => {console.log(error)}
        );

        this.toggleEdit();

    }

    clear() {
        this.toggleEdit();
        this.model = <IPerson>{...this.person}
    }


}
