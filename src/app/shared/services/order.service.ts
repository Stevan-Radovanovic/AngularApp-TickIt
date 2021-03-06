import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  createOrder(order: Order) {
    this.http
      .post('http://localhost:3000/orders', order)
      .subscribe((response) => {
        console.log(response);
      });
  }

  getOrdersByEmail(email: string) {
    return this.http.get<{ orders: Order[]; message: string }>(
      'http://localhost:3000/orders/mail',
      {
        params: {
          mail: email,
        },
      }
    );
  }
}
