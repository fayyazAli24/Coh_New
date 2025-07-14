import { Injectable } from '@angular/core';
import { ApiService } from '@/app/core/services/api.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ChargeCaptureService {
  constructor(private api: ApiService) { }

  getCacheItem(object: any) {
    return this.api.post('Cache/GetCache', object).toPromise();
  }

}