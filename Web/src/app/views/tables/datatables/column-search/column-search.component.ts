import {type AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PageTitleComponent} from "@app/components/page-title.component";
import {UiCardComponent} from "@app/components/ui-card.component";
import {NgIcon} from '@ng-icons/core';
import {DataTableDirective, DataTablesModule} from 'angular-datatables';
import {paginationIcons, tableData} from '@/app/views/tables/datatables/data';
import {Config} from 'datatables.net';
import {currency} from '@/app/constants';

@Component({
    selector: 'app-column-search',
    imports: [PageTitleComponent, UiCardComponent, NgIcon, DataTablesModule],
    templateUrl: './column-search.component.html',
    styles: ``
})
export class ColumnSearchComponent implements OnInit, AfterViewInit {
    @ViewChild(DataTableDirective, {static: false})
    datatableElement!: DataTableDirective;

    dtOptions: Config = {};

    ngOnInit(): void {
        this.dtOptions = {
            data: tableData,
            columns: [
                {data: 'company'},
                {data: 'symbol'},
                {
                    data: 'price',
                    render: (data: number) => {
                        return `${currency}${data}`
                    },
                    className: 'text-start',
                },
                {
                    data: 'change',
                    render: (data: number) => {
                        return `${data}%`
                    },
                    className: 'text-start',
                },
                {data: 'volume', className: 'text-start'},
                {
                    data: 'marketCap',
                    render: (data: string) => {
                        return `${currency}${data}`
                    },
                },
                {
                    data: 'rating',
                    render: (data: number) => {
                        return `${data}★`
                    },
                },
                {
                    data: 'status',
                    render: (data: string) => {
                        const badgeClass = data === 'Bullish' ? 'success' : 'danger'
                        return `<span class="badge badge-label badge-soft-${badgeClass}">${data}</span>`
                    },
                },
            ],
            language: {
                paginate: paginationIcons
            }
        }
    }

    ngAfterViewInit(): void {
        this.datatableElement.dtInstance.then(dtInstance => {
            dtInstance.columns().every(function () {
                const that = this;
                $('input', this.footer()).on('keyup change', function () {
                    if (that.search() !== (this as HTMLInputElement)['value']) {
                        that
                            .search((this as HTMLInputElement)['value'])
                            .draw();
                    }
                });
            });
        });
    }
}
