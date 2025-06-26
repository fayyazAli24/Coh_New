import {Component} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {DataTablesModule} from 'angular-datatables';
import {paginationIcons, tableData} from '../data';
import {currency} from '@/app/constants';
import {NgIcon} from '@ng-icons/core';
import {UiCardComponent} from '@app/components/ui-card.component';

@Component({
    selector: 'app-basic',
    imports: [PageTitleComponent, DataTablesModule, NgIcon, UiCardComponent],
    templateUrl: './basic.component.html',
    styles: ``
})
export class BasicComponent {
    basicData = tableData
    currency = currency

    dtOptions = {
        language: {
            paginate:paginationIcons
        }
    }
}
