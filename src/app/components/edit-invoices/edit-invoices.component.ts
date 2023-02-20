import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Invoice } from 'src/app/models/invoices';
import { InvoiceService } from 'src/app/services/invoices.service';


@Component({
  selector: 'app-edit-invoices',
  templateUrl: './edit-invoices.component.html',
  styleUrls: ['./edit-invoices.component.css']
})
export class EditInvoiceComponent implements OnInit {


@Input() invoice?: Invoice;
@Output() invoiceUpdated= new EventEmitter<Invoice[]>();
constructor(private invoicesService : InvoiceService){}
  ngOnInit(): void {
      
  }
  UpdateInvoice(invoice:Invoice){
    this.invoicesService.UpdateInvoice(invoice).subscribe((invoices:Invoice[])=> this.invoiceUpdated.emit(invoices));
  }
  DeleteInvoice(invoice:Invoice){
    this.invoicesService.DeleteInvoice(invoice).subscribe((invoices:Invoice[])=> this.invoiceUpdated.emit(invoices));
  }
  CreateInvoice(invoice:Invoice){
    this.invoicesService.CreateInvoice(invoice).subscribe((invoices:Invoice[])=> this.invoiceUpdated.emit(invoices));
  }
}
