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

    count: number;

    constructor(private activatedRoute: ActivatedRoute,
                private peopleService: PeopleService) {

    }

    ngOnInit() {

        this.activatedRoute.params.subscribe(
            data => {
                this.id = data.id;
                this.getPersonById(data.id);
            }
        )
    }

    getPersonById(id){
        this.peopleService.getPersonById(id)
            .subscribe(
                (data) => {
                    this.person = data;
                    this.model = {...this.person};
                },
                (error) => {
                    console.log(error)
                }
            )


    };

    toggleEdit() {
        this.edit = !this.edit;
    }

    onSubmit() {
        if (this.model.age > 18) {
            this.peopleService.updatePerson(this.model).subscribe(
                (data) => {
                    this.person = <IPerson>{...this.model};
                },
                (error) => {
                    console.log(error)
                }
            );

            this.toggleEdit();
        }
        else {
            alert("minor");
        }

    }

    clear() {
        this.toggleEdit();
        this.model = <IPerson>{...this.person}
    }


    setCount(event: number) {

        this.count = event
    }
}
