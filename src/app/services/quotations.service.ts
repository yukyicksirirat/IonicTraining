import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  addQuotaion(quotation) {
    return this.http.post(this.baseUrl + '/quotations', quotation);
  }

  updateQuotation(quotation) {
    return this.http.put(`${this.baseUrl}/quotations/${quotation.quotationId}`, quotation);
  }

  getQuotations() {
    return this.http.get(this.baseUrl + '/quotations');
  }

  getQuotationById(quotationId: number) {
    return this.http.get(`${this.baseUrl}/quotations/${quotationId}`);
  }
}
