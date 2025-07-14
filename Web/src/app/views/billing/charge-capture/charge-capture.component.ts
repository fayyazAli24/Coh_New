import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIconComponent } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '@/app/shared/icons.module';
import { PaginationComponent } from './pagination/pagination.component';
import Swal from 'sweetalert2'; 
import { ChargeCaptureService } from '@/app/shared/Services/Charge-capture/charge-capture.service';


@Component({
  selector: 'app-charge-capture',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconComponent,
    NgbNavModule,
    PaginationComponent,
    IconsModule,
    FormsModule
  ],
  standalone: true,
  templateUrl: './charge-capture.component.html',
  styleUrl: './charge-capture.component.scss'
})
export class ChargeCaptureComponent {
  chargecapture!: FormGroup;
  MyDiagnosisCode: any = [];
  activeTabId = 1;
  Provider: any = [];
  visibleData: any[] = [];
  ICDVersions: any[] = [];
  universaltoothcodearray: any[] = [];

  myData = [
    {
      id: 1,
      code: '0011',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 2,
      code: '0012',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 3,
      code: '0013',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 4,
      code: '0014',
      unit: 2.00,
      description: 'hello world'
    },
    {
      id: 1,
      code: '0011',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 2,
      code: '0012',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 3,
      code: '0013',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 4,
      code: '0014',
      unit: 2.00,
      description: 'hello world'
    },
    {
      id: 1,
      code: '0011',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 2,
      code: '0012',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 3,
      code: '0013',
      unit: 1.00,
      description: 'hello world'
    }, {
      id: 4,
      code: '0014',
      unit: 2.00,
      description: 'hello world'
    },
  ]

  universaltoothid: any;
  ProviderId: any = 0;


  constructor(
    private fb: FormBuilder,
    private service :ChargeCaptureService) { }

  ngOnInit(): void {
    this.chargecapture = this.fb.group({
      provider: [''],
      providerName: [''],
      code: [''],
      problem: [''],
      icdVersion: [''],
      confidential: [''],
      startDate: [''],
      endDate: [''],
      comments: [''],
      status: ['']
    });

    this.FillCache();
  }


  provider(event: any) {
    // this.AllDignosisApis();
    // this.loadICD9Gropu();
    // this.loadCPTGroup();
    // this.loadHCPCSGroup();
    // this.loadDentalGroupGroup();
    // this.AllServicesApis();
  }

   FillCache() {

    const cacheItems = [
      'HREmployeeType',
      'RegBloodGroup',
      'RegMaritalStatus',
      'RegGender',
      'RegCountries',
      'RegStates',
      'RegCities',
      'RegRelationShip',
      'RegTitle',
      'BLPayer',
      'BLPayerPlan',
      'BLPayerPackage',
    ];
    this.service.getCacheItem({ entities: cacheItems }).then((response: any) => {
      if (response.cache != null) {
        this.FillDropDown(response);
      }
    })
      .catch((error: any) => 
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message
        }));
  }

  FillDropDown(response: any) {
    debugger
    let jParse = JSON.parse(JSON.stringify(response)).cache;
    let hremploeevar = JSON.parse(jParse).Provider;
    let universaltoothcode = JSON.parse(jParse).BLUniversalToothCodes;
    let iCDVersion = JSON.parse(jParse).BLICDVersion;

    if (hremploeevar) {
      hremploeevar = hremploeevar.map(
        (item: { EmployeeId: any; FullName: any }) => {
          return {
            name: item.FullName,
            code: item.EmployeeId,
          };
        });

      const item = {
        name: "--- Select Provider ---",
        code: 0,
      };
      hremploeevar.push(item);
      this.ProviderId = 0;
      hremploeevar = hremploeevar.sort((a: any, b: any) => {
        return a.code - b.code;
      });
      this.Provider = hremploeevar;
      console.log(this.Provider, 'Provider');
    }



    if (universaltoothcode) {
      universaltoothcode = universaltoothcode.map(
        (item: { ToothCode: any; Tooth: any }) => {
          return {
            name: item.Tooth,
            code: item.ToothCode,
          };
        });
      this.universaltoothid = universaltoothcode[0].code
      this.universaltoothcodearray = universaltoothcode;
    }

    if (iCDVersion) {
      iCDVersion = iCDVersion.map(
        (item: { ICDVersionId: any; ICDVersion: any }) => {
          return {
            name: item.ICDVersion,
            code: item.ICDVersionId,
          };
        });
      const item = {
        name: 'ALL',
        code: 0,
      };
      iCDVersion.push(item);
      this.ICDVersions = iCDVersion;
    }
  }


  onPageChange(event: { start: number, end: number, currentPage: number, pageSize: number }) {
    this.visibleData = this.myData.slice(event.start, event.end);
  }
}
