import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class MockBackendService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      {
        id: 1,
        username: 'biggy',
        password: 'biggy',
        email: 'nuttapon1980@gmail.com',
        firstName: 'Biggy',
        lastName: 'Nuttapon',
        birthDate: '1985-07-01',
        country: 'Thailand',
        gender: 'M'
      }
    ];

    const quotations = [
      {
        id: 1,
        quotationNo: 'QUO1909001',
        quotationDate: '2019-09-12',
        customerId: 1,
        remark: null,
        subtotal: 0,
        vat: 0,
        discount: 0,
        grandTotal: 0,
        quotationItems: [
          {
            id: 1,
            quotationId: 1,
            lineNo: 1,
            itemId: 1,
            description: 'Product 1',
            qty: 100,
            uom: 'pcs',
            unitPrice: 100,
            discount: 0,
            vatId: 7,
            lineTotal: 10000
          },
          {
            id: 2,
            quotationId: 1,
            lineNo: 2,
            itemId: 2,
            description: 'Product 2',
            qty: 120,
            uom: 'pcs',
            unitPrice: 70,
            discount: 0,
            vatId: 7,
            lineTotal: 8400
          }
        ]
      }
    ];

    return {
      quotations, users
    };
  }
}
