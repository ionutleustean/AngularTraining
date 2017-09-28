import {Injectable} from '@angular/core';
import {LazyLoadEvent} from 'primeng/primeng';

@Injectable()
export class UrlBuilderService {

    constructor() {
    }

    createUrlFromLazyLoadEvent(baseUrl: string, event: LazyLoadEvent = {}) {

        let {filters, first, globalFilter, multiSortMeta, rows, sortField, sortOrder} = event;


        let queryParams = '';

        if (typeof first ==='number' && typeof rows === 'number') {
            queryParams = `${queryParams}&_start=${first}&_end=${first + rows}`
        }

        if(filters){
            for (let key in filters) {
                queryParams = `${queryParams}&${key}=${filters[key].value}`
            }
        }

        if(sortField && sortOrder){
            let order ='';
            if(sortOrder === 1) {
                order = 'asc';
            }
            else {
                order = 'desc';
            }

            queryParams = `${queryParams}&_sort=${sortField}&_order=${order}`
        }



        if(queryParams && queryParams.charAt(0)==='&'){
            queryParams = queryParams.replace('&','?');
        }
        return `${baseUrl}${queryParams}`

    }

}
