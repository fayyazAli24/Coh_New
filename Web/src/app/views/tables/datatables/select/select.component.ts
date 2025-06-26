import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {NgIcon} from '@ng-icons/core';
import {DataTablesModule} from 'angular-datatables';
import {UiCardComponent} from "@app/components/ui-card.component";
import {paginationIcons, tableData} from '../data';
import {currency} from '@/app/constants';

@Component({
    selector: 'app-select',
    imports: [PageTitleComponent, DataTablesModule, NgIcon, UiCardComponent],
    templateUrl: './select.component.html',
    styles: ``
})
export class SelectComponent {
    basicData = tableData
    currency = currency

    dtOptions = {
        pageLength: 7,
        lengthMenu: [7, 10, 25, 50, -1],
        select: { style: 'single' },
        language: {
            paginate:paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            // info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies'
        }
    };

    multiDtOptions = {
        pageLength: 7,
        lengthMenu: [7, 10, 25, 50, -1],
        select: { style: 'multi' },
        language: {
            paginate: paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            // info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies'
        }
    };

    cellDtOptions = {
        pageLength: 7,
        lengthMenu: [7, 10, 25, 50, -1],
        select: { style: 'os', items: 'cell' },
        language: {
            paginate: paginationIcons,
            lengthMenu: '_MENU_ Companies per page',
            // info: 'Showing <span class="fw-semibold">_START_</span> to <span class="fw-semibold">_END_</span> of <span class="fw-semibold">_TOTAL_</span> Companies'
        }
    };
}
