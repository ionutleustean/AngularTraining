import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

    data = [
        {
            id: 1,
            name: 'PersonA',
            email: 'personA@mail.com',
            phone: '074511111'
        }, {
            id: 2,
            name: 'PersonB',
            email: 'personB@mail.com',
            phone: '074511111'
        }, {
            id: 3,
            name: 'PersonB',
            email: 'personB@mail.com',
            phone: '074511111'
        }, {
            id: 4,
            name: 'PersonC',
            email: 'personC@mail.com',
            phone: '074511111'
        }
    ];

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    goToDetail(person: any) {
        this.router.navigate(
            ['../detail', person.id],
            {relativeTo: this.route}
        )
    }

}
