import {Component} from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {LucideAngularModule, LucideCircleDollarSign, LucideLayers, LucideSearch} from 'lucide-angular';
import {RouterLink} from '@angular/router';
import {NgIcon} from '@ng-icons/core';

@Component({
    selector: 'app-search-results',
    imports: [
        PageTitleComponent, LucideAngularModule,RouterLink,NgIcon
    ],
    templateUrl: './search-results.component.html',
    styles: ``
})
export class SearchResultsComponent {
    searchIcon = LucideSearch
    layerIcon=LucideLayers
    dollarIcon=LucideCircleDollarSign
}
