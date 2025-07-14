// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {
//   private tabData: { [key: string]: any[] } = {};

//   // Save data for a specific tab
//   setTabData(tabName: string, data: any[]) {
//     this.tabData[tabName] = data;
//   }

//   // Get data for a specific tab
//   async  getTabData(tabName: string): Promise<any> {
//     return await this.tabData[tabName] || [];
//   }

//   // Get all data (for final submit)
//   getAllData(): { [key: string]: any[] } {
//     return this.tabData;
//   }

//   // Optionally clear data after submit
//   clearData() {
//     this.tabData = {};
//   }
// }


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private tabData: { [key: string]: any[] } = {};

  // Save data for a specific tab
  async setTabData(tabName: string, data: any[]): Promise<void> {
    this.tabData[tabName] = data;
  }

  // Get data for a specific tab
  async getTabData(tabName: string): Promise<any[]> {
    return this.tabData[tabName] || [];
  }

  // Get all data (for final submit)
  async getAllData(): Promise<{ [key: string]: any[] }> {
    return this.tabData;
  }

  // Optionally clear data after submit
  async clearData(): Promise<void> {
    this.tabData = {};
  }
}

