import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoices';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private url ="Invoice"
  constructor(private http: HttpClient) { }

  public getInvoices():Observable<Invoice[]>{
    return this.http.get<Invoice[]>(`${environment.apiUrl}/${this.url}`);
  }
  public UpdateInvoice(invoice:Invoice ):Observable<Invoice[]>{
    return this.http.put<Invoice[]>(`${environment.apiUrl}/${this.url}`,invoice);
  }
  public CreateInvoice(invoice:Invoice):Observable<Invoice[]>{
    return this.http.post<Invoice[]>(`${environment.apiUrl}/${this.url}`,invoice);
  }
  public DeleteInvoice(invoice:Invoice):Observable<Invoice[]>{
    return this.http.delete<Invoice[]>(`${environment.apiUrl}/${this.url}/${invoice.id}`);
  }
}
