import { Component } from '@angular/core';
import { PageTitleComponent } from "@app/components/page-title.component";
import { NgIcon } from '@ng-icons/core';
import { DataTablesModule } from 'angular-datatables';
import { UiCardComponent } from "@app/components/ui-card.component";
import {paginationIcons} from '@/app/views/tables/datatables/data';

@Component({
    selector: 'app-ajax',
    imports: [PageTitleComponent, DataTablesModule, NgIcon, UiCardComponent],
    templateUrl: './ajax.component.html',
    styles: ``
})
export class AjaxComponent {
    ajaxDtOptions = {
        ajax: 'assets/data/datatables.json',
        processing: true,
        columns: [
            { data: 'company' },
            { data: 'symbol' },
            { data: 'price' },
            { data: 'change' },
            { data: 'volume' },
            { data: 'market_cap' },
            { data: 'rating' },
            {
                data: 'status',
                render: (data: string) => {
                    const isBullish = data === 'Bullish';
                    return `<span class="badge badge-label badge-soft-${isBullish ? 'success' : 'danger'}">${data}</span>`;
                }
            }
        ],
        language: {
            paginate: paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies'
        }
    }
}
