import {AfterViewInit, Component, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from '@app/components/ui-card.component';
import {NgIcon} from '@ng-icons/core';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
import {Api} from 'datatables.net';
import {paginationIcons} from '@/app/views/tables/datatables/data';

@Component({
    selector: 'app-child-rows',
    imports: [PageTitleComponent, UiCardComponent, DataTablesModule, NgIcon],
    templateUrl: './child-rows.component.html',
    styles: ``
})
export class ChildRowsComponent implements AfterViewInit,OnDestroy{
    @ViewChild(DataTableDirective, {static: false}) dtElement!: DataTableDirective;
    constructor(private renderer: Renderer2) {}
    private unlistenTableClick?: () => void;

    childRowOptions = {
        ajax: 'assets/data/datatables.json',
        columns: [
            {
                className: 'dt-control dt-child-rows-btn',
                orderable: false,
                data: null,
                defaultContent: '<span class="ti-square-rounded-plus-filled text-primary align-middle fs-22"></span>'
            },
            { data: 'company' },
            { data: 'symbol' },
            { data: 'price' },
            { data: 'change' },
            { data: 'volume' },
            { data: 'market_cap' }
        ],
        language: {
            paginate: paginationIcons
        }
    }

    ngAfterViewInit(): void {
        this.dtElement.dtInstance.then((dtInstance: Api) => {
            const table = document.getElementById('child-rows-data');
            if (!table) return;
            this.unlistenTableClick = this.renderer.listen(table, 'click', (e) => {
                const tr = (e.target as HTMLElement).closest('tr');
                if (!tr) return;
                const row = dtInstance.row(tr);
                if (!row || !row.data()) return;
                if (row.child.isShown()) {
                    row.child.hide();
                } else {
                    row.child(this.formatDetails(row.data())).show();
                }
            });
        });
    }

    ngOnDestroy(): void {
        if (this.unlistenTableClick) {
            this.unlistenTableClick();
        }
    }
    formatDetails(d: any) {
        if (!d) return '';
        return `
          <div class="row align-items-center">
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Rating:</h5>
        <div>${d.rating}</div>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Status:</h5>
        <span class="badge badge-label ${d.status === 'Bullish' ? 'badge-soft-success' : 'badge-soft-danger'}">${d.status}</span>
      </div>
      <div class="col-md-4">
        <h5 class="fs-base mb-1">Extra info:</h5>
        <div>And any further details here (images etc)...</div>
      </div>
    </div>
        `;
    }
}
