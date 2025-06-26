import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {paginationIcons, tableData} from '../data';
import {currency} from '@/app/constants';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs';
import {Api} from 'datatables.net';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'app-show-hide',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, DataTablesModule, NgbDropdownModule, FormsModule],
    templateUrl: './show-hide.component.html',
    styles: ``
})
export class ShowHideComponent implements AfterViewInit {
    @ViewChild(DataTableDirective, { static: false })
    dtElement!: DataTableDirective;
    dtTrigger: Subject<any> = new Subject();
    tableData = tableData
    currency = currency

    columnLabels = ['Company', 'Symbol', 'Price', 'Change', 'Volume', 'Market Cap', 'Rating', 'Status']
    columnVisibility = [true, true, true, true, true, true, true, true];
    columnsOptions={
        responsive: true,
        language: {
            paginate: paginationIcons
        }
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next({});
    }

    toggleColumn(colIdx: number, visible: boolean) {
        this.columnVisibility[colIdx] = visible;

        this.dtElement.dtInstance.then((dtInstance: Api) => {
            dtInstance.column(colIdx).visible(visible);
        });
    }
}
