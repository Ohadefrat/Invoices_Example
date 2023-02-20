import { Component } from '@angular/core';
import { Invoice } from './models/invoices';
import { InvoiceService } from './services/invoices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularasp';
  invoices: Invoice[] =[];
  invoiceToEdit?: Invoice;

  constructor(private invoiceService:InvoiceService){}
  
  ngOnInit() : void{
    this.invoiceService.getInvoices().subscribe((result: Invoice[])=> this.invoices= result);
    console.log(this.invoices);
    
  }
  initNewInvoice(){
    this.invoiceToEdit = new Invoice();
  }
  editInvoice (invoices: Invoice)
{
  this.invoiceToEdit = invoices;
}

updateInvoiceList(invoices: Invoice[]){
  this.invoices=invoices;

}
}


