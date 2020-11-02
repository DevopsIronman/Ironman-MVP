import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orders: any;
  filteredorders: any;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.orders = res.data;
        this.orders =  this.orders.sort((a,b) => new Date(b.createdAt).getTime()  - new Date(a.createdAt).getTime()  );
        this.filteredorders = this.orders;
      }
    });
  }

  view(i) {
    console.log(i)
    this.orders[i].open = true
  }
  viewtoggle(i) {
    console.log(i)
    this.orders[i].open = false
  }

  focus(option){
    console.log(option)
    let frequency ;
    let date = new Date();
        // date.setDate(date.getDate() + frequency);
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 2).toISOString();
    if (option == "This Month") {
      frequency = 1;
      let serviceDue = new Date(date.getFullYear(), date.getMonth() + frequency, 0).toISOString();
      // serviceDue = date.toISOString();
       
    
       this.filteredorders = this.orders.filter(order => {
       return order.createdAt >= firstDay
            && order.createdAt <= serviceDue
       });
    } else if (option == "Last 3 Months"){
      frequency = -4;
      let firstDay = new Date().toISOString();
      let serviceDue = new Date(date.getFullYear(), date.getMonth() + frequency, 0).toISOString();
      // serviceDue = date.toISOString();
       
       this.filteredorders = this.orders.filter(order => {
       return order.createdAt <= firstDay
            && order.createdAt >= serviceDue
       });
    }
   if(option == "This year") {
    this.filteredorders = this.orders.filter(order => {
      return new Date(order.createdAt).getFullYear() == new Date().getFullYear()
    });
   }
    
  
  }
}
