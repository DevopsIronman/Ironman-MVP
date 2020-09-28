import { Component, OnInit } from '@angular/core';
import {LeadService} from '../../service/lead.service'

@Component({
  selector: 'app-service-due',
  templateUrl: './service-due.page.html',
  styleUrls: ['./service-due.page.scss'],
})
export class ServiceDuePage implements OnInit {
  orders: any;
  filteredorders: any;
  constructor(public leadService: LeadService) { }

  ngOnInit() {
    this.leadService.getCustomer().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.orders = res.data;
        this.orders =  this.orders.sort((a,b) => new Date(a.serviceDue).getTime()  - new Date(b.serviceDue).getTime()  );
        this.orders.forEach(element => {
          element.daysleft = new Date(element.serviceDue).getTime()  - new Date().getTime()  ;
          element.daysleft = Math.ceil(element.daysleft / (1000 * 3600 * 24)); 
          console.log((element.daysleft))
        });
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
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1).toISOString();
  if(option == "This Month") {
    frequency = 1;
  } else if (option == "Next 3 Months"){
    frequency = 4;
  }
 if(option == "This year") {
  this.filteredorders = this.orders.filter(order => {
    return order.serviceDue >= firstDay
            && new Date(order.serviceDue).getFullYear() == new Date().getFullYear()
  });
 } else {

   let serviceDue = new Date(date.getFullYear(), date.getMonth() + frequency, 0).toISOString();
   // serviceDue = date.toISOString();
  this.filteredorders = this.orders.filter(order => {
  return order.serviceDue >= firstDay
         && order.serviceDue <= serviceDue
  });
 }
  

}


}
