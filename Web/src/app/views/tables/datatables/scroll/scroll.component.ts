import {currency} from '@/app/constants';
import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {DataTablesModule} from 'angular-datatables';
import {paginationIcons, tableData} from '../data';

@Component({
    selector: 'app-scroll',
    imports: [PageTitleComponent, DataTablesModule, NgIcon, UiCardComponent],
    templateUrl: './scroll.component.html',
    styles: ``
})
export class ScrollComponent {
    tableData = tableData
    currency = currency

    verticalScrollOptions = {
        paging: false,
        scrollCollapse: true,
        scrollY: '250px'
    }

    horizontalScrollOptions = {
        scrollX: true,
        language: {
            paginate: paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies'
        }
    }
}
