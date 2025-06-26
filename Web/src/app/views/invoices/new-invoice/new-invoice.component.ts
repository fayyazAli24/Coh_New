import { Component } from '@angular/core';
import {PageTitleComponent} from '@app/components/page-title.component';
import {NgIcon} from '@ng-icons/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-new-invoice',
    imports: [PageTitleComponent, NgIcon, RouterLink],
  templateUrl: './new-invoice.component.html',
  styles: ``
})
export class NewInvoiceComponent {
    previewSrc: string = 'assets/images/logo-black.png';

    onLogoSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: ProgressEvent<FileReader>) => {
                this.previewSrc = e.target?.result as string;
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
}
