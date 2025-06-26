import {currency} from '@/app/constants';
import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {DataTablesModule} from 'angular-datatables';
import {paginationIcons, tableData} from '../data';

@Component({
    selector: 'app-fixed-header',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, DataTablesModule],
    templateUrl: './fixed-header.component.html',
})
export class FixedHeaderComponent {
    currency = currency
    tableData = tableData

    fixedColumnDtOptions = {
        fixedHeader: {
            header: true,
            headerOffset: 65
        },
        pageLength: 25,
        language: {
            paginate: paginationIcons
        }
    }
}
