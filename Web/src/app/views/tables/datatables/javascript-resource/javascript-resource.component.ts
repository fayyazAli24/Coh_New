import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { DataTablesModule } from 'angular-datatables';
import { data } from './data';
import { UiCardComponent } from "@app/components/ui-card.component";
import { NgIcon } from '@ng-icons/core';
import {paginationIcons} from '@/app/views/tables/datatables/data';

@Component({
    selector: 'app-javascript-resource',
    imports: [PageTitleComponent, DataTablesModule, UiCardComponent,NgIcon],
    templateUrl: './javascript-resource.component.html',
    styles: ``
})
export class JavascriptResourceComponent {

    dtOptions = {
        columns: [
            { title: 'company' },
            { title: 'symbol' },
            { title: 'price' },
            { title: 'change' },
            { title: 'volume' },
            { title: 'market_cap' },
            { title: 'rating' },
            {
                title: 'status',
                render: function (data: string) {
                    var badgeClass = data === 'Bullish' ? 'badge-soft-success' : 'badge-soft-danger';
                    return `<span class="badge badge-label ${badgeClass}">${data}</span>`;
                }
            }
        ],
        data: data,
        language: {
            paginate: paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            info: 'Showing <span class="fw-semibold">_START_ </span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies' // Customize the "Showing" text
        }
    }

}
