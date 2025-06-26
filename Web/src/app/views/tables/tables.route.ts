import { Routes } from '@angular/router';
import { AjaxComponent } from './datatables/ajax/ajax.component';
import { BasicComponent } from './datatables/basic/basic.component';
import { ChildRowsComponent } from './datatables/child-rows/child-rows.component';
import { ColumnSearchComponent } from './datatables/column-search/column-search.component';
import { DataRenderingComponent } from './datatables/data-rendering/data-rendering.component';
import { ExportDataComponent } from './datatables/export-data/export-data.component';
import { FixedHeaderComponent } from './datatables/fixed-header/fixed-header.component';
import { JavascriptResourceComponent } from './datatables/javascript-resource/javascript-resource.component';
import { ScrollComponent } from './datatables/scroll/scroll.component';
import { SelectComponent } from './datatables/select/select.component';
import { ShowHideComponent } from './datatables/show-hide/show-hide.component';
import { StaticComponent } from './static/static.component';
import {CustomComponent} from '@/app/views/tables/custom/custom.component';

export const TABLES_ROUTES: Routes = [
    {
        path: 'tables/static',
        component: StaticComponent,
        data: { title: "Static Tables" },
    },
    {
        path: 'tables/custom',
        component: CustomComponent,
        data: { title: "Custom Tables" },
    },
    {
        path: 'data-tables/basic',
        component: BasicComponent,
        data: { title: "Basic Datatables" },
    },
    {
        path: 'data-tables/export-data',
        component: ExportDataComponent,
        data: { title: "Export Datatables" },
    },
    {
        path: 'data-tables/select',
        component: SelectComponent,
        data: { title: "Select Datatables" },
    },
    {
        path: 'data-tables/ajax',
        component: AjaxComponent,
        data: { title: "Ajax Datatables" },
    },
    {
        path: 'data-tables/javascript-source',
        component: JavascriptResourceComponent,
        data: { title: "Javascript Source datatables" },
    },
    {
        path: 'data-tables/data-rendering',
        component: DataRenderingComponent,
        data: { title: "Data Rendering" },
    },
    {
        path: 'data-tables/scroll',
        component: ScrollComponent,
        data: { title: "Scroll Datatables" },
    },
    {
        path: 'data-tables/columns',
        component: ShowHideComponent,
        data: { title: "Show Hide Columns" },
    },
    {
        path: 'data-tables/child-rows',
        component: ChildRowsComponent,
        data: { title: "Child Rows" },
    },
    {
        path: 'data-tables/column-search',
        component: ColumnSearchComponent,
        data: { title: "Column Search" },
    },
    {
        path: 'data-tables/fixed-header',
        component: FixedHeaderComponent,
        data: { title: "Fixed Header" },
    }
];
