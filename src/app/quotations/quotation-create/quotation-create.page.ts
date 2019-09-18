import { FormBuilder, FormGroup, Validators, ValidatorFn, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.page.html',
  styleUrls: ['./quotation-create.page.scss'],
})
export class QuotationCreatePage implements OnInit {

  quotationForm: FormGroup;

  // Property
  get quotationLine(): FormArray {
    return this.quotationForm.get('quotationItems') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.quotationForm = this.fb.group({
      quotationNo: ['', Validators.required],
      quotationDate: ['', Validators.required],
      customer: ['0', Validators.required],
      expireDate: ['', Validators.required],
      paymentTerm: '0',
      referenceNo: '',
      pic: '',
      subtotal: [0, Validators.required],
      otherCharges: [0, Validators.required],
      vat: [0, Validators.required],
      grandTotal: [0, Validators.required],
      quotationItems: this.fb.array([this.createQuotationItems()])

    });
  }
  createQuotationItems() {
    return this.fb.group({
      productId: [0, Validators.required],
      productName: ['', Validators.required],
      qty: [0, Validators.required],
      unitPrice: [0, Validators.required],
      discount: [0, Validators.required],
      lineTotal: [0, Validators.required]
    });
  }

  addItem() {
    this.quotationLine.push(this.createQuotationItems());
  }
  removeItem(i: number) {
    this.quotationLine.removeAt(i);
  }
  submit() {

  }
}
